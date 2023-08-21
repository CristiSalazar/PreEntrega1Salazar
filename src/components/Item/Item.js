import { Link } from "react-router-dom"

const Item = ({id, nombre, img, precio, stock}) => {
    return(
        <article>
            <header>
                <h2>Nombre: {nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>Precio: ${precio}</p>
                <p>Stock: {stock}</p>
                <p>Id: {id}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}
export default Item