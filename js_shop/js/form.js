document.getElementById("filtroForm").addEventListener("submit", obtenerDatosForm);

function obtenerDatosForm(event) {
    event.preventDefault();

    const precioMin = Number(document.getElementById("precioMin").value);
    const precioMax = Number(document.getElementById("precioMax").value);
    const title = document.getElementById("title").value.toLowerCase();

    const filtrados = productos.filter(producto => {
        const productoTitulo = producto.title.toLowerCase();

        const cumplePrecio =
            (!precioMin || producto.price >= precioMin) &&
            (!precioMax || producto.price <= precioMax);

        const cumpleTitulo =
            !title || productoTitulo.includes(title);

        return cumplePrecio && cumpleTitulo;
    });

    // console.log("Productos filtrados:", filtrados);

    sectionTodosProductos.innerHTML = '';
    pintarTodosLosProductos(filtrados, sectionTodosProductos);

    event.target.reset();
}