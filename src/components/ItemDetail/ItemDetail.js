import Contador from "../ItemCount/ItemCount"
import { getProducts } from "../../asyncMock"

const ItemDetail = ({id, nombre, img, precio}) => {
    return(
        <article>
            <header>
                <h2>
                    Nombre:{nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt="" />
            </picture>
            <section>
                <p>
                    precio: {precio}
                </p>
            </section>
            <footer>
                <Contador onAdd={(Contador) => console.log("Cantidad agregada")}/>
            </footer>
        </article>
    )
}


export default ItemDetail