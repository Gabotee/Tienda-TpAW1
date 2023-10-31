
const Producto = {
    Categoria: "Deportivo",
    Articulo: [
        {
            nombre: "Camiseta Argentina",
            Detalles: [
                { 
                    Precio: 65000
                },
                {
                    Talle: "XL" 
                },
                {
                    Genero: "Masculino"
                },
                {
                    Imagen: "./media/CamisetaArgentina.jpg"
                }
            ],
        },

        {
            nombre: "Conjunto Deportivo H",
            Detalles: [
                { 
                    Precio: 30000
                },
                {
                    Talle: "L"
                },
                {
                    Genero: "Masculino"
                },
                {
                    Imagen: "./media/ConjuntoDeportivoHombre.jpg"
                }
            ],
        },

        {
            nombre: "Conjunto Deportivo M",
            Detalles: [
                { 
                    Precio: 25000
                },
                {
                    Talle: "XL"
                },
                {
                    Genero: "Femenino"
                },
                {
                    Imagen: "./media/ConjuntoDeportivoMujer.jpg"
                }
            ],
        },

        {
            nombre: "Zapatillas Nike",
            Detalles: [
                { 
                    Precio: 50000
                },
                {
                    Talle: 40
                },
                {
                    Genero: "Masculino"
                },
                {
                    Imagen: "./media/ZapatillasDeportiva.jpg"
                }
            ],
        },

        {
            nombre: "Camiseta Argentina Suplente",
            Detalles: [
                { 
                    Precio: 45000
                },
                {
                    Talle: "XL"
                },
                {
                    Genero: "Masculino"
                },
                {
                    Imagen: "./media/CamisetaSuplente.jpg"
                }
            ],
        }
    ]
};

export default Producto

// Identificamos el contenedor
//const app = document.getElementById("app");

//console.log(app)

 
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

//app.innerHTML = RenderHTML

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