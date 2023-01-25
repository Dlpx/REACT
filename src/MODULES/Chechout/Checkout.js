import { useContext, useState } from "react";
import { CartContext } from "../../CONTEXT/CartContext/CartContext";
import "./Checkout.css";
import { db } from "../../FIREBASE/Config";
import { collection, addDoc } from "firebase/firestore";




const Checkout = () => {

    const {carrito, totalCarrito, vaciarCarrito} = useContext(CartContext)
    const {resumen, setResumen} = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        email: ''
    })
    

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            cliente: values,
            items: carrito,
            total: totalCarrito()
        }

        const refOrders = collection(db, "orders")
        addDoc(refOrders, orden)
            .then((doc) => {
                setResumen(doc.id)
                console.log(resumen)
            })
            .catch((err) => console.log(err))
    }
    


    return(
        <div>
            <h1>CheckOut</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleInputChange}
                        type='text'
                        name="nombre"
                        value={values.nombre}

                        placeholder='Nombre:'
                    />
                    <input
                        onChange={handleInputChange}
                        type='text'
                        name="direccion"
                        value={values.direccion}

                        placeholder='Direccion:'
                    />
                    <input
                        onChange={handleInputChange}
                        type='number'
                        name="telefono"
                        value={values.telefono}

                        placeholder='Telefono de contacto:'
                    />
                    <input
                        onChange={handleInputChange}
                        type='email'
                        name="email"
                        value={values.email}

                        placeholder='Correo Electronico:'
                    />
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}



export default Checkout;