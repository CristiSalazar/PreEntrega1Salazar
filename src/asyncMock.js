const productos = [
    {   nombre: "El quijote",
        precio: 1500,
    },
    {   nombre: "El quijote",
        precio: 1500,
    }
]

export const getProducts = ()=>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos)
        }, 500)
    })
}
