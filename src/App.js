import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListConainer/ItemListContainer";
import Contador from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
  <>
    <NavBar/>
    <ItemListContainer greeting = {"Bienvenidos"}/>
    <ItemDetailContainer/>
    <Contador stock={10} onAdd= {(contador) => console.log("Cantidad agregada", contador)}/>
    
    <div className="App">

    </div>
  </>  
  );
  
}

export default App;
