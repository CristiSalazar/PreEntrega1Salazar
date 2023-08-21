import { useState, useEffect } from "react"
import {getDocs, collection, query, where, doc, updateDoc} from "firebase/firestore";
import {db} from "../services/config"

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const misProductos = query(collection(db, "productos"));

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map(doc => ({id: doc.id, ...doc.data()})));
            })
            .catch(error => {
                console.log(error)
            })
    }, [productos])

    const descontarStock = async (producto) => {
        const productRef = doc(db, "productos", producto.id);
        let nuevoStock = producto.stock - 1;
        await updateDoc(productRef, {stock: nuevoStock})
    }

    return(
        <>
         <div>
            {
                productos.map(producto => (
                    <div>
                        <img src={producto.img} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p>Precio: {producto.precio}</p>
                        <p>Stock: {producto.stock}</p>
                        <button onClick={()=> descontarStock(producto)}>Comprar</button>
                    </div>
                ))
            }
         </div>
        </>
    )
    
}

export default Productos