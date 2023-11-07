
const Producto = {
    categoria: "Deportivo",
    articulo: [
        {    
            nombre: "Camiseta Argentina",
            Precio: 65000,
            Talle: "XL",
            Genero: "Masculino",
            Imagen: "./media/CamisetaArgentina.jpg"
        },

        {
            nombre: "Conjunto Deportivo H",
            Precio: 30000,
            Talle: "L",
            Genero: "Masculino",
            Imagen: "./media/ConjuntoDeportivoHombre.jpg"
        },

        {     
            nombre: "Conjunto Deportivo M",
            Precio: 25000,
            Talle: "XL",
            Genero: "Femenino",
            Imagen: "./media/ConjuntoDeportivoMujer.jpg"  
        },

        {    
            nombre: "Zapatillas Nike",
            Precio: 50000,
            Talle: 40,
            Genero: "Masculino",
             Imagen: "./media/ZapatillasDeportiva.jpg"
        },

        {
            nombre: "Camiseta Argentina Suplente",
            Precio: 45000,
            Talle: "XL",
            Genero: "Masculino",
            Imagen: "./media/CamisetaSuplente.jpg"
        }
    ]
};

export default Producto

// Identificamos el contenedor
const app = document.getElementById("app");

//console.log(app)

 

let RenderHTML = `<h2>${Producto.categoria}</h2>`

// Producto.articulos.forEach(
//     (detalles)=>{
//         let Productos = "";
//         Producto.Productos.forEach(
//             (detalles)=>{
//                 if (detalles.precio < 100000){
//                       Productos += `<p>${detalles.Precio}</p>`
//                   Productos += `<img ${detalles.Imagen}>`
//                     Productos += `<h2>${articulo.nombre}</h2>`
//                     Productos += `<p>${detalles.Talle}</p>`
//                 }else{
//                     materias += `<li>${materia.nombre} (Promocionable)</li> `
//                 }
//         })       
//     }
// )


// app.innerHTML = RenderHTML





// Creamos variable que contendrá el HTML renderizado
// let renderizado = `<h2>${carrera.nombre}</h2>`;

// carrera.semestres.forEach(semestre=>{
//     let materias = ""
//     semestre.materias.forEach(materia=>{
//         materias += materia.nombre
//     })
//     renderizado += semestre.nombre + " " + materias
// })

// Probamos si funciona
// app.innerHTML = renderizado;