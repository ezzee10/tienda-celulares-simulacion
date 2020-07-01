
/**CARRITO */

//--------------------------variables globales--------------------------------------//
let valorCarrito = 0;
let cantidadItems = 0;

//-----------------------------creación del carrito--------------------------------------//
const carrito = document.querySelector(".carrito");
const header = document.createElement("div");
const logo = document.createElement("i");
const titulo = document.createElement("p");
titulo.innerHTML = "Mi Compra";
const items = document.createElement("p");
items.innerHTML = `${cantidadItems} items`;
const totalContainer = document.createElement("div");
const totalprecio = document.createElement("p");
carrito.appendChild(header);
header.appendChild(logo);
header.appendChild(titulo);
header.appendChild(items);
totalContainer.appendChild(totalprecio);
carrito.appendChild(totalContainer);


const containerProducto = document.createElement("div");
containerProducto.classList.add("container-productos");
const carritoVacioContainer = document.createElement("div");
const carritoVacio = document.createElement("p");
carritoVacio.innerHTML = "No tiene ningún artículo en el carro de compras";
carritoVacioContainer.appendChild(carritoVacio);
carrito.appendChild(carritoVacioContainer);
carrito.appendChild(containerProducto);

//----------------------------------funciones-------------------------------------------------------------//

const agregarAlCarrito = (valor, nombre) => {

    valorCarrito += valor;
    cantidadItems++;
    carritoVacio.innerHTML = "";
    totalprecio.innerHTML = `Total: $${valorCarrito}`;

    //Actualizando la cantidad de items y el total de precios
    actualizarLaCantidadItems(cantidadItems);
    totalprecio.innerHTML = `Total: $${valorCarrito}`;

    agregarScriptingCarrito(valor, nombre);
    console.log(valorCarrito);
}


const agregarScriptingCarrito = (valor, nombre) => {
    //Agregando los productos with scripting
    const producto = document.createElement("div");
    producto.classList.add("productoCompra");
    producto.setAttribute("cant-productos", "1");

    const fotoProducto = document.createElement("img");

    const valorProducto = document.createElement("p");

    const nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = (`${nombre}`);

    const disminuirCantidad = document.createElement("button");
    disminuirCantidad.innerHTML = "-";
    disminuirCantidad.addEventListener("click", quitarItems);

    const cantidadProductos = document.createElement("div");
    cantidadProductos.classList.add("agregar-productos");

    const cantidad = document.createElement("p");
    cantidad.innerHTML = (`${1.0}`);

    const precioProducto = document.createElement("p");
    precioProducto.innerHTML = (`${valor}`);

    const aumentarCantidad = document.createElement("button");
    aumentarCantidad.innerHTML = "+";
    aumentarCantidad.addEventListener("click", agregarItems);

    const eliminarProducto = document.createElement("button");
    eliminarProducto.innerHTML = "Eliminar";
    eliminarProducto.setAttribute("type", "button");
    eliminarProducto.addEventListener('click', deleteProducto);

    producto.appendChild(fotoProducto);
    producto.appendChild(precioProducto);
    producto.appendChild(nombreProducto);
    producto.appendChild(cantidadProductos);
    cantidadProductos.appendChild(disminuirCantidad);
    cantidadProductos.appendChild(cantidad);
    cantidadProductos.appendChild(aumentarCantidad);
    producto.appendChild(eliminarProducto);
    containerProducto.appendChild(producto);

    if (cantidadItems === 1) {
        const contenedorEliminarTodo = document.createElement("div");
        contenedorEliminarTodo.classList.add("eliminar-todo");
        const botonEliminarTodo = document.createElement("button");
        botonEliminarTodo.setAttribute("type", "button");
        botonEliminarTodo.innerHTML = "Vaciar carrito";
        botonEliminarTodo.addEventListener("click", vaciarCarritoCompleto);
        carrito.appendChild(contenedorEliminarTodo);
        contenedorEliminarTodo.appendChild(botonEliminarTodo);
    }

}

//Eliminar producto añadido al carrito
const deleteProducto = (e) => {

    let precio = parseFloat(e.target.parentNode.firstChild.nextSibling.textContent);
    let cantidadItemsDelProducto = parseInt((e.target.parentNode.getAttribute("cant-productos")));
    e.target.parentElement.remove();
    cantidadItems--;
    valorCarrito -= (precio * cantidadItemsDelProducto);
    ActualizarprecioCarrito();
    actualizarLaCantidadItems(cantidadItems);
}

const ActualizarprecioCarrito = () => {
    if (valorCarrito === 0) {
        totalprecio.innerHTML = ``;
        carritoVacio.innerHTML = "No tiene ningún artículo en el carro de compras";
    } else {
        totalprecio.innerHTML = `Total: $${valorCarrito}`;
    }
}

const actualizarLaCantidadItems = (cantidad) => {
    items.innerHTML = `${cantidad} items`;
}

//Agregar items de un mismo producto 
const agregarItems = (e) => {
    let cantidadItems = parseInt((e.target.parentNode.parentNode.getAttribute("cant-productos")));
    e.target.parentNode.parentNode.setAttribute("cant-productos", `${cantidadItems + 1}`);
    e.target.parentNode.firstChild.nextSibling.innerHTML = `${cantidadItems + 1}`;
    let precio = parseFloat(e.target.parentNode.parentNode.firstChild.nextSibling.textContent);
    valorCarrito += precio;
    ActualizarprecioCarrito();
}

//Quitar items de un mismo producto 
const quitarItems = (e) => {
    let cantidadItems = parseInt((e.target.parentNode.parentNode.getAttribute("cant-productos")));
    if (cantidadItems !== 1) {
        e.target.parentNode.parentNode.setAttribute("cant-productos", `${cantidadItems - 1}`);
        e.target.parentNode.firstChild.nextSibling.innerHTML = `${cantidadItems - 1}`;
        let precio = parseFloat(e.target.parentNode.parentNode.firstChild.nextSibling.textContent);
        valorCarrito -= precio;
        ActualizarprecioCarrito();
    }
}

const vaciarCarritoCompleto = (e) => {
    valorCarrito = 0;
    cantidadItems = 0;
    let productos = document.getElementsByClassName('productoCompra');
    let lenght = productos.length;
    for (let i = 0; i < lenght; i++) {
        containerProducto.removeChild(productos[0]);
    }
    e.target.remove();
    ActualizarprecioCarrito();
    actualizarLaCantidadItems(0);
}





















