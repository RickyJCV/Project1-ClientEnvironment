document.addEventListener("DOMContentLoaded", function() {
    let botonEnviar = document.getElementById("buscar");
    botonEnviar.addEventListener("click", filtroMarcaPrecio);
    botonEnviar.addEventListener("click", listaSimilar);
})

function filtroMarcaPrecio(marca, precio) {
    let lista_cachimbas = document.getElementById("lista_cachimbas");
    lista_cachimbas.innerHTML = "";
    let inputMarca = document.getElementById("marca").value;
    let inputPrecio = document.getElementById("precio").value
    let filtrar = (marca, precio) => listadoCachimbas.filter(x => x.marca === marca).filter(x => (x.precio === precio));
    let filtro_cachimbas= filtrar(inputMarca, inputPrecio);
    if (inputMarca ==="" || inputPrecio ==="") {
        let lista_cachimbas = document.getElementById("lista_cachimbas");
        let liCachimba = document.createElement("li");
        liCachimba.innerHTML = "No existe una cachimba con estas caracteristicas";
        lista_cachimbas.appendChild(liCachimba);
    }

    let liCachimba = document.createElement("li");
    for (let a of filtro_cachimbas) {
        liCachimba.innerHTML = a.marca+"<br>"+a.modelo+"<br>"+a.precio;
        lista_cachimbas.appendChild(liCachimba);
    }
    if (filtro_cachimbas[0]===undefined) {
        let liCachimba = document.createElement("li");
        liCachimba.innerHTML = "No existe una cachimba con estas caracteristicas";
        lista_cachimbas.appendChild(liCachimba);
    }
}

function listaSimilar(marca) {
    let lista_similar = document.getElementById("lista_similar");
    lista_similar.innerHTML = "";

}