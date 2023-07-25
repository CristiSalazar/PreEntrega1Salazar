import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productos, SetProductos] = useState(null)
    const {idItem} = useParams();

    useEffect(() => {
        getProductsById(idItem)
        .then(res => {
            SetProductos(res)
        })
        .catch(error => {
            console.error(error)
        })
    }, [idItem])

    return(
        <div>
            <ItemDetail {...productos}/>
        </div>
    )

}
export default ItemDetailContainer