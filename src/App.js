import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListConainer/ItemListContainer";
import Contador from "./components/ItemCount/ItemCount";




function App() {
  return (
  <>
    <NavBar/>
    <ItemListContainer greeting = {"Bienvenidos"}/>
    <Contador stock={10} onAdd= {(contador) => console.log("cantidad agregada", contador)}/>
    
    <div className="App">

    </div>
  </>  
  );
  
}

export default App;
