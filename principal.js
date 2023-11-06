import datos from "./producto.js"
console.log(datos)


let producto
fetch("./producto.json").then((datos)=>{
    return datos.json()
}).then((datos)=>{
        producto = datos
    }
)

