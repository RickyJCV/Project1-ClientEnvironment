document.addEventListener("DOMContentLoaded", function() {

    let botonEnviar = document.getElementById("buscar");
    botonEnviar.addEventListener("click", filtroMarcaPrecio);

})


function filtroMarcaPrecio(marca, precio) {
    let inputMarca = document.getElementById("marca").value;
    let inputPrecio = document.getElementById("precio").value;
    let filtrar = (marca, precio) => console.log(listadoCachimbas.filter(x => x.marca === marca).filter(x => (x.precio === precio)));
    console.log(inputMarca);
    console.log(inputPrecio);
    return filtrar(inputMarca, inputPrecio);

    let lista_cachimbas = document.getElementById("lista_cachimbas");
    lista_cachimbas.innerHTML = "";
    let liCachimba = document.createElement("li");
    liCachimba.innerHTML = listadoCachimbas.marca;
    lista_cachimbas.appendChild(liCachimba);

}