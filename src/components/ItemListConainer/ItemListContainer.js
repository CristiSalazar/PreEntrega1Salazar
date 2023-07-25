import { useState, useEffect } from "react"
import { getProducts, getProductsPorCategoria } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams();

    useEffect(() => {
        const funcion = idCategoria ? getProductsPorCategoria : getProducts;
        funcion(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
    }, [idCategoria]) 

    
    
    return(
        <>
        <h2>{greeting}</h2>
        <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer