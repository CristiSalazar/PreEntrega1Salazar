import { useParams } from "react-router-dom";

const Drama = () => {
        const {id} = useParams();
        console.log(id);
    
    return (
        <div>
            <h2>Sección Drama</h2>
            <p> ID del producto: {id} </p>
        </div>
    )
}

export default Drama