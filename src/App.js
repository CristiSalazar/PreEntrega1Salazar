import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListConainer/ItemListContainer";
import Contador from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
  <>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
          <Route path="*" element= {<h1>Página no disponible</h1>}/>
        </Routes>
    </BrowserRouter>

    {/* <ItemListContainer greeting = {"Bienvenidos"}/>
    <ItemDetailContainer/> */}
    <Contador stock={10} onAdd= {(contador) => console.log("Cantidad agregada", contador)}/> 
  </>  
  );
  
}

export default App;
