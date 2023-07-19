import Contador from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, img, precio}) => {
    return(
        <article>
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt="" />
            </picture>
            <section>
                <p>
                    Precio: {precio}
                </p>
            </section>
            <footer>
                <Contador onAdd={(contador) => console.log("Cantidad agregada")}/>
            </footer>
        </article>
    )
}

export default ItemDetail