import { useState, createContext } from "react";

export const CartContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    
    console.log(carrito);

    const agregarProducto = (item, cantidad) => {
        const isInCart = carrito.find(prod => prod.item.id === item.id);
        
        if(!isInCart){
            setCarrito(prev => [...prev, {item, cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad))
        } else {
            const carritoUpdated = carrito.map(prod => {
                if(prod.item.id === item.id){
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            })
            setCarrito(carritoUpdated);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    }
    
    const removeItem = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoUpdated = carrito.filter(prod=> prod.item.id !== id)
        setCarrito(carritoUpdated);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    const clearCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value = {{carrito, total, cantidadTotal, agregarProducto, removeItem, clearCarrito}}>
            {children}
        </CartContext.Provider>
    )
}