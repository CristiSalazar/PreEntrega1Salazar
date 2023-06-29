import CartWidget from "./CartWidget/CartWidget"

function NavBar (){
    return(
        <nav>
            <h3>Librería "Los Poetas"</h3>
            <div>
                <button>Acción</button>
                <button>Fantasía</button>
                <button>Drama</button>
            </div>
            <CartWidget/>
        
        </nav>
    )
}

export default NavBar