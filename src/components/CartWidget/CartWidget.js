import { useContext } from "react";
import { CartContext } from "../../context/CartContext";  
import { Link } from "react-router-dom";
import cart from "./assets/carrito.png"
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext);

    return(
        <div>
            
            <Link to="/cart">
                <FaShoppingCart/>
                {
                    cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget