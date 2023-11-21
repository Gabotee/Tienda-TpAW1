import Producto from "./producto.js"

//console.log(app)

let Productos = "";

Producto.articulo.forEach(
    (articulos)=>{
       Productos += `
                <div class="Compras_container_item">
                    <div class="Compras_item">
                        <figure>
                             <img src="${articulos.Imagen}" alt="">
                        </figure>
                        <div class="Compras_info-producto">
                            <h2>${articulos.nombre}</h2>
                            <p class="Compras_precio">${articulos.Precio}</p>
                            <p class="Compras_precio">${articulos.Talle}</p>
                            <a href="${articulos.Boton}">Comprar</a> 
                        </div>
                    </div>
                </div>`;   
              
});

 // Identificamos el contenedor
const app = document.getElementById("app");


app.innerHTML = Productos;


