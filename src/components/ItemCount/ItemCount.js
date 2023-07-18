import { useState } from "react"

function Contador (props){
    let [contador, setContador] = useState(0) 

    function handleRestar(){
        if (contador > 0){
            setContador(contador - 1)
        }
    }
    function handleSumar(){
        if (contador < props.stock){
            setContador(contador + 1)
        }
    }
    function handleOnAdd(){
        props.onAdd(contador)
    }
    return(
        <div>
            <p>{contador}</p>
            <button onClick={handleRestar}>-</button>
            <button onClick={handleSumar}>+</button>
            <button onClick={handleOnAdd}>Agregar al carrito</button>
        </div>
    )
}
export default Contador
