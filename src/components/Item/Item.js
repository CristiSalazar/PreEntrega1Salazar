const Item = ({nombre, precio}) => {
    return(
        <article>
            <header>
                <h2>{nombre}</h2>
            </header>
            <section>
                <p>{precio}</p>
            </section>
        </article>
    )
}
export default Item