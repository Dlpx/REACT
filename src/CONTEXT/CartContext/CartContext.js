import { createContext, useEffect } from "react";
import { useState } from "react";


export const CartContext = createContext();


export const CartProvider = ( {children} ) => {
    const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || []
    
    const [carrito, setCarrito] = useState(carritoInicial)

    const agregarAlCarrito = (item) => {
        setCarrito( [...carrito, item])
    }

    const removerDelCarrito = (id) => {
        setCarrito( carrito.filter((item) => item.id !== id) )
    }

    const isInCart = (id) =>{
        return carrito && carrito.some(item => item.id === id)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }


    const totalCarrito = () => {
        return carrito.reduce( (acc, item) => acc + item.precio * item.cantidad, 0 )
    }

    const cantidadCarrito = () => {
        return carrito.reduce( (acc, item) => acc + item.cantidad, 0)
    }


    useEffect( () => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])



    
    return (
        <CartContext.Provider value={
            {
                carrito, 
                agregarAlCarrito, 
                isInCart,
                vaciarCarrito,
                totalCarrito,
                removerDelCarrito,
                cantidadCarrito
            }
        }>
            {children}
        </CartContext.Provider>
    )
}