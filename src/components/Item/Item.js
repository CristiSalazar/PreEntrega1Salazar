const Item = ({id, nombre, precio, img}) => {
    return(
        <article>
            <header>
                <h2>{nombre}</h2>
            </header>
            <section>
                <p>Precio: {precio}</p>
            </section>
            <picture>
                <img src={img} alt="" />
            </picture>
            <footer>
                <button>Ver detalle</button>
            </footer>
        </article>
    )
}
export default Item