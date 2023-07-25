import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, SetProducto] = useState(null)
    const {idItem} = useParams();

    useEffect(() => {
        getProductsById(idItem)
            .then(resolve => SetProducto(resolve))
    }, [idItem])

    return(
        <div>
            <ItemDetail {...producto}/>
        </div>
    )

}
export default ItemDetailContainer