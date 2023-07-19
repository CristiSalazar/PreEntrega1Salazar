import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [productos, SetProductos] = useState(null)

    useEffect(() => {
        getProductsById("1")
        .then(response => {
            SetProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div>
            <ItemDetail {...productos}/>
        </div>
    )

}
export default ItemDetailContainer