import { useContext, useState } from "react";
import { CartContext } from "../../CONTEXT/CartContext/CartContext";
import "./Checkout.css";
import { db } from "../../FIREBASE/Config";
import { collection, writeBatch, documentId, getDocs, query, where, addDoc } from "firebase/firestore";
import PopUp from "./PopUp/PopUp";
import PopUpAlert from "./PopUpAlert/PopUpAlert";





const Checkout = () => {

    const {carrito, totalCarrito, vaciarCarrito} = useContext(CartContext)
    const [resumen, setResumen] = useState(null)
    const [popUp, setPopUp] = useState(false)
    const [out, setOut] = useState([])


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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            cliente: values,
            items: carrito,
            total: totalCarrito()
        }

        const batch = writeBatch(db)
        const refOrders = collection(db, 'orders')
        const refProductos = collection(db, 'productos')

        const outOfStock = []

        const refItems = query( refProductos, where( documentId(), 'in', carrito.map(prod => prod.id) ) )
        const productos = await getDocs(refItems)

        productos.docs.forEach((doc) => {
            const item = carrito.find(item => item.id === doc.id)

            if ( doc.data().stock >= item.cantidad ) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(refOrders, orden)
                        .then((doc) => {
                            setResumen({
                                ...orden,
                                id: doc.id
                            })
                            setPopUp(true)
                            vaciarCarrito()
                        })
                        .catch((err) => console.log(err))
                })
        } else {
            setOut(outOfStock)
        }
    }
    




    return(
        <div>
            {
                popUp && <PopUp resumen={resumen} />
            }
            {
                out.length >= 1 && <PopUpAlert outOfStock={out} />
            }
            <div className="checkout">
                <h1>CheckOut</h1>
                <div className="formContenedor">
                    <h4>Datos del comprador:</h4>
                    <form onSubmit={handleSubmit} className="formulario">
                        <input
                            onChange={handleInputChange}
                            type='text'
                            name="nombre"
                            value={values.nombre}
                            
                            placeholder='Nombre:'
                            className="input-form"
                            />
                        <input
                            onChange={handleInputChange}
                            type='text'
                            name="direccion"
                            value={values.direccion}
                            
                            placeholder='Direccion:'
                            className="input-form"
                            />
                        <input
                            onChange={handleInputChange}
                            type='number'
                            name="telefono"
                            value={values.telefono}
                            
                            placeholder='Telefono de contacto:'
                            className="input-form"
                            />
                        <input
                            onChange={handleInputChange}
                            type='email'
                            name="email"
                            value={values.email}
                            
                            placeholder='Correo Electronico:'
                            className="input-form"
                            />
                        <button className="btn btn-hover-green">Finalizar Compra</button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default Checkout;