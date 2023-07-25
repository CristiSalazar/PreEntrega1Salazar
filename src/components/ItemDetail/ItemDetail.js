import Contador from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, img, precio}) => {
    return(
        <article>
            <header>
                <h2>
                    Nombre:{nombre}
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
                <Contador onAdd={(Contador) => console.log("Cantidad agregada")}/>
            </footer>
        </article>
    )
}


export default ItemDetail