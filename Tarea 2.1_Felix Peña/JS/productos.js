const getProductos = async () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            const Cartas = document.getElementById("Cartas");

            data.forEach(producto => {
                const card = document.createElement("section");
                card.className = "col-12 col-md-6 col-lg-6 col-xl-6";

                card.innerHTML = `
                    <div col-md-6>
                        <div class="card">
                            <div class="card-body d-flex flex-column align-items-center justify-content-center">
                                <img src="${producto.image}" class="card-img-top producto-imagen" >
                                <h4 class="card-title">${producto.title}</h4>
                                <p class="card-text"><strong>Categoría:</strong>${producto.category}</p>
                                <p class="card-text"><strong>Precio:</strong> ${producto.price}</p>
                                <p class="card-text"><strong>Descripcion del producto:</strong> ${producto.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                Cartas.appendChild(card);
            });

            const imagenesProductos = document.querySelectorAll('.producto-imagen');
            imagenesProductos.forEach(imagen => {
                imagen.style.width = '200px';
                imagen.style.height = '200px';
                imagen.style.objectFit = 'cover';
            });
        })
        .catch(error => console.error(error));
};

(() => {
    getProductos();
})();

