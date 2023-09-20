document.addEventListener("DOMContentLoaded", function () {
    const botonesAñadir = document.querySelectorAll(".añadir-carrito");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");

    let carrito = [];

    botonesAñadir.forEach((boton) => {
        boton.addEventListener("click", function () {
            const idProducto = boton.getAttribute("data-id");
            const productoElemento = boton.parentElement;
            const nombre = productoElemento.querySelector("h2").textContent;
            const descripcion = productoElemento.querySelector(".descripcion").textContent;
            const precio = parseFloat(productoElemento.querySelector(".precio").getAttribute("data-precio"));

            const producto = {
                id: idProducto,
                nombre: nombre,
                descripcion: descripcion,
                precio: precio,
            };

            carrito.push(producto);
            actualizarCarrito();
        });
    });

    function actualizarCarrito() {
        listaCarrito.innerHTML = "";
        let total = 0;

        carrito.forEach((producto) => {
            const itemCarrito = document.createElement("li");
            itemCarrito.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
            listaCarrito.appendChild(itemCarrito);
            total += producto.precio;
        });

        totalCarrito.textContent = `$${total.toFixed(2)}`;
    }
});