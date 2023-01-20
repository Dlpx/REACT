import { createContext, useState } from "react";

const MOCK_USUARIOS = [
    {
        usuario: 'dlpx94',
        contraseña: 'admin'
    }
]


export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const [usuario, setUsuario] = useState({
        usuario: null,
        logged: false,
        error: null
    })

    const login = (values) => {
        const match = MOCK_USUARIOS.find(usuario => usuario.usuario === values.usuario && usuario.contraseña === values.contraseña)

        if (match) {
            setUsuario({
                usuario: match.usuario,
                logged: true,
                error: null
            })
        } else {
            setUsuario({
                usuario: '',
                logged: false,
                error: 'Usuario y/o contraseña incorrectos'
            })
        }
    }
    const logOut = () => {
        setUsuario({
            usuario: null,
            logged: false,
            error: null
        })
        console.log(usuario)
    }
    return (
        <LoginContext.Provider value={{usuario, login, logOut}}>
            {children}
        </LoginContext.Provider>
    )

}