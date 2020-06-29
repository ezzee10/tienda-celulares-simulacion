/**CARRITO */

const carrito = document.querySelector(".carrito");
let valorCarrito = 0;
let cantidadItems = 0;

//carrito with scripting
const header = document.createElement("div");
const logo = document.createElement("i");
const titulo = document.createElement("p");
titulo.innerHTML = "Mi Compra";
const items = document.createElement("p");
items.innerHTML = `${cantidadItems} items`;
const totalContainer = document.createElement("div");
const totalprecio = document.createElement("p");
totalprecio.innerHTML = `Total: $${valorCarrito}`;
carrito.appendChild(header);
header.appendChild(logo);
header.appendChild(titulo);
header.appendChild(items);
totalContainer.appendChild(totalprecio);
header.appendChild(totalContainer);



const agregarAlCarrito = (valor) => {

    valorCarrito += valor;
    cantidadItems++;

    //Actualizando la cantidad de items y el total de precios
    items.innerHTML = `${cantidadItems} items`;
    totalprecio.innerHTML = `Total: $${valorCarrito.toFixed(3)}`;

    //Agregando los carritos with scripting
    const containerProducto = document.createElement("div");
    const fotoProducto = document.createElement("img");
    const valorProducto = document.createElement("p");
    const nombreProducto = document.createElement("p");
    const disminuirCantidad = document.createElement("button");
    const contenedorStock = document.createElement("div");
    const valorStock = document.createElement("p");
    const aumentarCantidad = document.createElement("button");
    const eliminarProducto = document.createElement("button");

    containerProducto.appendChild(fotoProducto);
    containerProducto.appendChild(valorProducto);
    containerProducto.appendChild(nombreProducto);
    containerProducto.appendChild(disminuirCantidad);
    contenedorStock.appendChild(valorStock);
    containerProducto.appendChild(contenedorStock);
    containerProducto.appendChild(aumentarCantidad);
    containerProducto.appendChild(eliminarProducto);

    carrito.appendChild(containerProducto);








    console.log("carrito actual", "$" + valorCarrito.toFixed(3));
}


















