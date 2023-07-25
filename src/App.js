import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import Accion from "./components/Acción/Accion";
import Drama from "./components/Drama/Drama";
import Fantasia from "./components/Fantasía/Fantasia";
import ItemListContainer from "./components/ItemListConainer/ItemListContainer";
import Contador from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Accion" element={<Accion/>}/>
          <Route path="/Fantasia" element={<Fantasia/>}/>
          <Route path="/Drama" element={<Drama/>}/>
        </Routes>
    </BrowserRouter>

    <ItemListContainer greeting = {"Bienvenidos"}/>
    <ItemDetailContainer/>
    <Contador stock={10} onAdd= {(contador) => console.log("Cantidad agregada", contador)}/>
    
    <div className="App">

    </div>
  </>  
  );
  
}

export default App;
