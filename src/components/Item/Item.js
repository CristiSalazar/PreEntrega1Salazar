import { Link } from "react-router-dom"

const Item = ({id, nombre, img, precio}) => {
    return(
        <article>
            <header>
                <h2>{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>Precio: ${precio}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}
export default Item