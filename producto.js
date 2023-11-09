
const Producto = {
    categoria: "Deportivo",
    articulo: [
        {    
            nombre: "Camiseta Argentina",
            Precio: 65000,
            Talle: "XL",
            Genero: "Masculino",
            Imagen: "./media/CamisetaArgentina.jpg",
            Boton: "./Contacto.html"
        },

        {
            nombre: "Conjunto Deportivo H",
            Precio: 30000,
            Talle: "L",
            Genero: "Masculino",
            Imagen: "./media/ConjuntoDeportivoHombre.jpg",
            Boton: "./Contacto.html"
        },

        {     
            nombre: "Conjunto Deportivo M",
            Precio: 25000,
            Talle: "XL",
            Genero: "Femenino",
            Imagen: "./media/ConjuntoDeportivoMujer.jpg",
            Boton: "./Contacto.html"
        },

        {    
            nombre: "Zapatillas Nike",
            Precio: 50000,
            Talle: 40,
            Genero: "Masculino",
            Imagen: "./media/ZapatillasDeportiva.jpg",
            Boton: "./Contacto.html"
        },

        {
            nombre: "Camiseta Argentina Suplente",
            Precio: 45000,
            Talle: "XL",
            Genero: "Masculino",
            Imagen: "./media/CamisetaSuplente.jpg",
            Boton: "./Contacto.html"
        }
    ]
};

export default Producto

// Identificamos el contenedor
const app = document.getElementById("app");

//console.log(app)



let Productos = "";

Producto.articulo.forEach(
    (articulo)=>{
       Productos += `<div class="Compras_container_item">
            <div class="Compras_item">
                <figure>
                    <img src="${articulo.Imagen}" alt="${articulo.nombre}">
                </figure>
                <div class="Compras_info-producto">
                    <h2>${articulo.nombre}</h2>
                    <p class="Compras_precio">${articulo.Precio}</p>
                    <p class="Compras_precio">${articulo.Talle}</p>
                    <a href="${articulo.Boton}">Comprar</a> 
                </div>
                
            </div>

        </div>`;   
              
});

let RenderHTML = `<h2>${Producto.categoria}</h2>${Productos}`; 

app.innerHTML = RenderHTML;











/*
    <!-- ConjuntoDeportivoHombre -->
            <div class="Compras_item">
                <figure>
                    <img src="media/ConjuntoDeportivoHombre.jpg" alt="">
                </figure>
                <div class="Compras_info-producto">
                    <h2>Conjunto Deportivo</h2>
                    <p class="Compras_precio">30.000</p>
                    <p class="Compras_precio">L</p>
                    <a href="Contacto.html">Comprar</a>
                </div>
            </div>
            
            <!-- ConjuntoDeportivoMujer -->
            <div class="Compras_item">
                <figure>
                    <img src="media/ConjuntoDeportivoMujer.jpg" alt="">
                </figure>
                <div class="Compras_info-producto">
                    <h2>Conjunto Deportivo</h2>
                    <p class="Compras_precio">25.000</p>
                    <p class="Compras_precio">XL</p>
                    <a href="Contacto.html">Comprar</a>
                </div>
            </div>
            
            <!-- Zapatilla -->
            <div class="Compras_item">
                <figure>
                    <img src="media/ZapatillasDeportiva.jpg" alt="">
                </figure>
                <div class="Compras_info-producto">
                    <h2>Zapatilla Nike</h2>
                    <p class="Compras_precio">50.000</p>
                    <p class="Compras_precio">T 40</p>
                    <a href="Contacto.html">Comprar</a>
                </div>
            </div>
            
            <!-- CamisetaArgentinaSuplente -->
            <div class="Compras_item">
                <figure>
                    <img src="media/CamisetaSuplente.jpg" alt="">
                </figure>
                <div class="Compras_info-producto">
                    <h2>Camiseta ARG Suplente</h2>
                    <p class="Compras_precio">45.000</p>
                    <p class="Compras_precio">XL</p>
                    <a href="Contacto.html">Comprar</a>
                </div>
            </div>
*/
