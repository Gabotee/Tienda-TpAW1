const Producto = {
    nombre: "Deportivo",
    Detalle: [
        {
            nombre: "Camiseta Argentina",
            Detalles: [
                { 
                    Precio: 65.000
                },
                {
                    Talle: XL
                },
                {
                    Genero: Masculino
                },
            ],
        },

        {
            nombre: "Conjunto Deportivo",
            Detalles: [
                { 
                    Precio: 30.000
                },
                {
                    Talle: L
                },
                {
                    Genero: Masculino
                },
            ],
        },

        {
            nombre: "Conjunto Deportivo",
            Detalles: [
                { 
                    Precio: 25.000
                },
                {
                    Talle: XL
                },
                {
                    Genero: Femenino
                },
            ],
        },

        {
            nombre: "Zapatillas Nike",
            Detalles: [
                { 
                    Precio: 50.000
                },
                {
                    Talle: 40
                },
                {
                    Genero: Masculino
                },
            ],
        },

        {
            nombre: "Camiseta Argentina Suplente",
            Detalles: [
                { 
                    Precio: 45.000
                },
                {
                    Talle: XL
                },
                {
                    Genero: Masculino
                },
            ],
        }
    ]
};

// Identificamos el contenedor
const app = document.getElementById("app");

console.log(app)

 
/*
let RenderHTML = `<h2>${carrera.nombre}</h2>`

carrera.semestres.forEach(
    (semestre)=>{
        RenderHTML += `<h3>${semestre.nombre}</h3>`

        let materias = "";
        semestre.materias.forEach(
            (materia)=>{
                if (materia.promocionable == true){
                    materias += `<li>${materia.nombre} (No Promocionable) </li>`
                }else{
                    materias += `<li>${materia.nombre} (Promocionable)</li> `
                }
        })
        RenderHTML += `<ul>${materias}</ul>`
        
    }

)
*/

app.innerHTML = RenderHTML

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