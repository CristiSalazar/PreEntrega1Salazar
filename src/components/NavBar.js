import CartWidget from "./CartWidget/CartWidget"

function NavBar (){
    return(
        <nav>
            <h3>Tienda</h3>
            <div>
                <button>Poleras</button>
                <button>Pantalones</button>
                <button>Camisas</button>
            </div>
            <CartWidget/>
        
        </nav>
    )
}

export default NavBar