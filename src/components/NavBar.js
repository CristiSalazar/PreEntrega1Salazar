import CartWidget from "./CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <Link to= "/"> 
                <h1>Librería "Los Poetas"</h1>
            </Link>
            <nav>
                <ul>
                   <li>
                    <NavLink to= "/">Home</NavLink>
                   </li>

                   <li>
                    <NavLink to="/Accion">Acción</NavLink>
                   </li>

                   <li>
                    <NavLink to="/Fantasia">Fantasía</NavLink>
                   </li>

                   <li>
                    <NavLink to="/Drama">Drama</NavLink>
                   </li>

                </ul>
                <CartWidget/>
        
            </nav>
        </header>
    )
}

export default NavBar