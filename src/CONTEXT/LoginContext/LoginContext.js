import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth, db } from "../../FIREBASE/Config"
import { addDoc, collection } from "firebase/firestore";



export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    

    const [loading, setLoading] = useState(false)
    const [usuario, setUsuario] = useState({
        email: null,
        logged: false,
        error: null,
        favs: [],
        datosPersonales: {
            direccion: '',
            telefono: ''
        }
    })

    const login = (values) => {
        setLoading(true)

        signInWithEmailAndPassword(auth, values.email, values.contraseña)
            .then((userCredential) => {
                setUsuario({
                    email: userCredential.user.email,
                    logged: true
                })
            })    
            .catch((err) => {
                console.log(err)
                setUsuario({
                    email: null,
                    logged: false,
                    error: err.message
                })
            })
            .finally(() => setLoading(false))
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUsuario({
                    email: null,
                    logged: false,
                    error: null
                })
            })
        
    }


    const register = (values) => {
        setLoading(true)

        createUserWithEmailAndPassword(auth, values.email, values.contraseña)
            .then((userCredential) => {
                setUsuario({
                    ...usuario,
                    email: userCredential.user.email,
                    logged: true,
                    error: null
                })
                let newUser = {
                    email: userCredential.user.email,
                    favs: [],
                    datosPersonales: {
                        direccion: '',
                        telefono: ''
                    }
                }
                const usersCollection = collection(db, 'users')
                addDoc(usersCollection, newUser)
            })
            .catch((err) => {
                console.log(err)
                setUsuario({
                    email: null,
                    logged: false,
                    error: err.message
                })
            })
            .finally(() => setLoading(false))
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUsuario({
                    email: user.email,
                    logged: true,
                    error: null
                })
            } else {
                logOut()
            }
        })
    }, [])

    return (
        <LoginContext.Provider value={{
            usuario, 
            login, 
            logOut, 
            register, 
            loading}}>
            {children}
        </LoginContext.Provider>
    )

}