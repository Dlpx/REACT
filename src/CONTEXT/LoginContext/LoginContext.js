import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../FIREBASE/Config"



export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    

    const [loading, setLoading] = useState(false)
    const [usuario, setUsuario] = useState({
        email: null,
        logged: false,
        error: null
    })

    const login = (values) => {
        setLoading(true)

        signInWithEmailAndPassword(auth, values.email, values.contraseña)
            .then((userCredential) => {
                setUsuario({
                    email: userCredential.user.email,
                    logged: true,
                    error: null
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
                    email: userCredential.user.email,
                    logged: true,
                    error: null
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
        <LoginContext.Provider value={{usuario, login, logOut, register, loading}}>
            {children}
        </LoginContext.Provider>
    )

}