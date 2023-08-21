import { useState } from "react"


const Contador = ({stock, funcionAgregar}) => {
    const [contador, setContador] = useState(0)
    

    const handleSumar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    } 

    const handleRestar = () => {
        if(contador > 0) {
            setContador(contador - 1);
        }
    }


  return (
    <>
        <div>
            <button onClick={handleRestar}> - </button>
            <p> {contador} </p>
            <button onClick={handleSumar}> + </button>
        </div>
        <button onClick={()=> funcionAgregar(contador)}>Agregar Producto</button>
    </>
  )
}




export default Contador