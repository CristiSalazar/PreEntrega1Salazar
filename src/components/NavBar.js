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
                    <NavLink to="/categoria/2">Fantasía</NavLink>
                   </li>
                   <li>
                    <NavLink to="/categoria/3">Acción</NavLink>
                   </li>
                </ul>
                <CartWidget/>
        
            </nav>
        </header>
    )
}

export default NavBar