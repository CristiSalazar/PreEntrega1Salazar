import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListConainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Productos from "./componentes/Productos";
import Checkout from "./Checkout";

const App = () => {
  return (
  <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
            <Route path="*" element= {<h1>Página no disponible</h1>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path= "/cart" element={<Cart/>} />
          </Routes>
      </CartProvider>
    </BrowserRouter>
  </>  
  );
  
}

export default App;
