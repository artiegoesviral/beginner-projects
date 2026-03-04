const sectionDestacados = document.querySelector('#destacados article');
const sectionTodosProductos = document.querySelector('#todosProductos article');



// <div>
// <p class="category"></p>
// <p class="name"></p>
// <small></small>
// <p class="price"></p>
// </div>


function pintarUnProducto(producto, article) {
    const div = document.createElement('div');
    div.classList.add('producto');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = producto.image;
    img.alt = producto.name;

    const category = document.createElement('p');
    category.textContent = `${producto.category}`;
    category.classList.add('categoria-producto');

    const title = document.createElement('p');
    title.textContent = `${producto.title}`;
    title.classList.add('nombre-producto');

    const sku = document.createElement('small');
    sku.textContent = `SKU: ${producto.sku}`;
    sku.classList.add('sku-producto');

    const price = document.createElement('p');
    price.textContent = `${producto.price}€`;
    price.classList.add('precio-producto');

    if (producto.destacado) {
        const icono = document.createElement('i');
        icono.classList.add('fa-solid', 'fa-star', 'icono-destacado');
        imgContainer.append(icono);
    }

    div.append(img, category, title, sku, price, imgContainer);
    article.append(div);
}


function pintarTodosLosProductos(productos, sectionHtml) {
    for (let producto of productos) {
        pintarUnProducto(producto, sectionHtml);
    }
}

function sacarDestacados(list) {
    return list.filter(producto => producto.destacado === true);
}

const destacados = sacarDestacados(productos);

pintarTodosLosProductos(productos, sectionTodosProductos);
pintarTodosLosProductos(destacados, sectionDestacados);
