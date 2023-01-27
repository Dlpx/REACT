import { useState } from "react"
import "./Contacto.css"


const Contacto = () => {
   
    const [values, setValues] = useState({
        id: '',
        nombre: '',
        email: '',
        cel: ''
    })

    const handleInputChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return(
        <div className="contactoContainer">
            <h1>Contacto</h1>
            <p>¡Suscribete a nuestro newsletter para que recibas informacion importante sobre nuestras ofertas y promociones!</p>
            <form className="formulario">
                <input
                    onChange={handleInputChange}
                    value={values.nombre}
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    className="input-form"
                />
                <input
                    onChange={handleInputChange}
                    value={values.email}
                    name="email"
                    type="email"
                    placeholder="Correo Electronico"
                    className="input-form"
                />
                <input
                    onChange={handleInputChange}
                    value={values.cel}
                    name="cel"
                    type="phone"
                    placeholder="Numero de telefono"
                    className="input-form"
                />

                <button onClick={handleSubmit} className="btn btn-secundario contraste">Enviar</button>
            </form>

        </div>
    )
}



export default Contacto;