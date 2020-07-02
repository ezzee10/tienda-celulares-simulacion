
/**CARRITO */

//--------------------------variables globales--------------------------------------//
let valorCarrito = 0;
let cantidadItems = 0;

//-----------------------------creación del carrito--------------------------------------//
const carrito = document.querySelector(".carrito");
const header = document.createElement("div");
header.classList.add('mi-compra');
const logo = document.createElement("i");
logo.classList.add(`fa`, 'fa-shopping-cart');
logo.innerHTML = "   Mi Compra";
const items = document.createElement("p");
items.innerHTML = `${cantidadItems} items`;
const totalContainer = document.createElement("div");
totalContainer.classList.add('total');
const totalprecio = document.createElement("p");
totalprecio.innerHTML = "No tiene ningún artículo en el carro de compras.";
carrito.appendChild(header);
header.appendChild(logo);
header.appendChild(items);
totalContainer.appendChild(totalprecio);
carrito.appendChild(totalContainer);


const containerProducto = document.createElement("div");
containerProducto.classList.add("container-productos");
carrito.appendChild(containerProducto);

//----------------------------------funciones-------------------------------------------------------------//

const agregarAlCarrito = (id_producto) => {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `includes/modelos/modelo-tienda.php?id=${id_producto}`, true);
    xhr.onload = function () {
        if (this.status === 200 && xhr.readyState == 4) {
            let datos = JSON.parse(xhr.responseText);

            valorCarrito += parseFloat(datos.precio);
            cantidadItems++;
            //Actualizando la cantidad de items y el total de precios
            ActualizarprecioCarrito();
            actualizarLaCantidadItems(cantidadItems);
            agregarScriptingCarrito(datos);
            console.log(valorCarrito);

        } else {
            console.log("No se obtuvieron datos");
        }
    }
    xhr.send();
}

const agregarScriptingCarrito = (datos) => {

    //Agregando los productos with scripting
    const producto = document.createElement("div");
    producto.classList.add("producto-compra");
    producto.setAttribute("cant-productos", "1");

    const fotoProducto = document.createElement("img");
    fotoProducto.setAttribute("src", `${datos.foto}`);

    const nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = (`${datos.nombre}`);
    nombreProducto.classList.add('name');

    const disminuirCantidad = document.createElement("i");
    disminuirCantidad.setAttribute("type", "button");
    disminuirCantidad.addEventListener("click", quitarItems);
    disminuirCantidad.classList.add('fas', 'fa-minus', 'fa-2x');

    const cantidadProductos = document.createElement("div");
    cantidadProductos.classList.add("agregar-productos");

    const cantidad = document.createElement("p");
    cantidad.classList.add("cantidad");
    cantidad.innerHTML = (`${1.0}`);

    const precioProducto = document.createElement("p");
    precioProducto.classList.add('precio-producto');
    precioProducto.innerHTML = (`${datos.precio}`);

    const aumentarCantidad = document.createElement("i");
    aumentarCantidad.setAttribute("type", "button");
    aumentarCantidad.classList.add('fas', 'fa-plus', 'fa-2x');
    aumentarCantidad.addEventListener("click", agregarItems);

    const eliminarProducto = document.createElement("i");
    eliminarProducto.setAttribute("type", "button");
    eliminarProducto.classList.add("fa", "fa-trash", 'fa-2x');
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

        const contenedorPagar = document.createElement("button");
        contenedorPagar.classList.add("contenedor-pagar");
        const textoPagar = document.createElement("p");
        textoPagar.classList.add("texto-pagar");
        textoPagar.innerHTML = "PAGAR";
        const botonPagar = document.createElement("i");
        botonPagar.setAttribute("type", "button");
        botonPagar.classList.add("fas", "fa-cash-register", "fa-2x");

        carrito.appendChild(contenedorEliminarTodo);
        contenedorEliminarTodo.appendChild(botonEliminarTodo);
        contenedorPagar.appendChild(textoPagar);
        contenedorPagar.appendChild(botonPagar);
        carrito.appendChild(contenedorPagar);
    }

}

//Eliminar producto añadido al carrito
const deleteProducto = (e) => {

    let precio = parseFloat(e.target.parentNode.firstChild.nextSibling.textContent);
    let cantidadItemsDelProducto = parseInt((e.target.parentNode.getAttribute("cant-productos")));
    e.target.parentElement.remove();
    if (cantidadItems === 1) {
        eliminarBotonVaciarCarritoYbotonPagar();
    }
    cantidadItems--;
    valorCarrito -= (precio * cantidadItemsDelProducto);
    ActualizarprecioCarrito();
    actualizarLaCantidadItems(cantidadItems);

}

const ActualizarprecioCarrito = () => {
    if (valorCarrito === 0) {
        totalprecio.innerHTML = `No tiene ningún artículo en el carro de compras`;
    } else {
        totalprecio.innerHTML = `Total:`;
        const spanPrecio = document.createElement('span');
        totalprecio.appendChild(spanPrecio);
        spanPrecio.innerHTML = `$${valorCarrito}`;
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
    let productos = document.getElementsByClassName('producto-compra');
    let lenght = productos.length;
    for (let i = 0; i < lenght; i++) {
        containerProducto.removeChild(productos[0]);
    }
    eliminarBotonVaciarCarritoYbotonPagar();
    ActualizarprecioCarrito();
    actualizarLaCantidadItems(0);

}

const eliminarBotonVaciarCarritoYbotonPagar = () => {
    let vaciarTodo = document.getElementsByClassName('eliminar-todo');
    document.getElementsByClassName('carrito')[0].removeChild(vaciarTodo[0]);
    let botonPagar = document.getElementsByClassName('contenedor-pagar');
    document.getElementsByClassName('carrito')[0].removeChild(botonPagar[0]);
}

























