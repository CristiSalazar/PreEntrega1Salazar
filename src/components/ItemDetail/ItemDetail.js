import Contador from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import {useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({id, nombre, img, precio}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0);

    const {agregarProducto} = useContext(CartContext)

    const manejadorCantidad = (cantidad) => {
        setCantidadAgregada(cantidad);
        console.log("productos agregados:" + cantidad)
        
        const item = {id, nombre, precio};

        agregarProducto(item, cantidad);
    }
    
    
    return(
        <article>
            <header>
                <h2>
                    Nombre: {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    Id: {id}
                </p>
            </section>
            <footer>
                {   
                    cantidadAgregada > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<Contador stock={10} funcionAgregar= {manejadorCantidad}/>)
                }
            </footer>
        </article>
    )
}


export default ItemDetail