document.addEventListener("DOMContentLoaded", function () {
    let botonEnviar = document.getElementById("buscar");
    botonEnviar.addEventListener("click", filtroMarcaPrecio);
    let botonSimilar = document.getElementById("buscarMarcaSimilar");
    botonSimilar.addEventListener("click", listaSimilar);
    let botonVotos = document.getElementById("botonVotos");
    botonVotos.addEventListener("click", votosUsuario);
    let botonPrecio = document.getElementById("botonPrecio");
    botonPrecio.addEventListener("click", filtrarPrecio);

})
/** @description Filtra por marca y precio
 * @param {String} marca
 * @param {Int} precio
 */
function filtroMarcaPrecio(marca, precio) {
    let lista_cachimbas = document.getElementById("lista_cachimbas");
    lista_cachimbas.innerHTML = "";
    let inputMarca = document.getElementById("marca").value;
    let inputPrecio = document.getElementById("precio").value
    let filtrar = (marca, precio) => listadoCachimbas.filter(x => x.marca === marca).filter(x => (x.precio === precio));
    let filtro_cachimbas = filtrar(inputMarca, inputPrecio);
    if (inputMarca === "" || inputPrecio === "") {
        let lista_cachimbas = document.getElementById("lista_cachimbas");
        let liCachimba = document.createElement("li");
        liCachimba.innerHTML = "No existe una cachimba con estas caracteristicas";
        lista_cachimbas.appendChild(liCachimba);
    }

    let liCachimba = document.createElement("li");
    if (!/^[0-9]+$/.test(inputPrecio)) {
        let lista_cachimbas = document.getElementById("lista_cachimbas");
        let liCachimba = document.createElement("li");
        liCachimba.innerHTML = "Escriba solo numeros";
        lista_cachimbas.appendChild(liCachimba);
    } else if (filtro_cachimbas[0] === undefined) {
        let liCachimba = document.createElement("li");
        liCachimba.innerHTML = "No existe una cachimba con estas caracteristicas";
        lista_cachimbas.appendChild(liCachimba);
    }


    for (let a of filtro_cachimbas) {
        liCachimba.innerHTML = a.marca + "<br>" + a.modelo + "<br>" + a.precio;
        lista_cachimbas.appendChild(liCachimba);
    }

}
/** @description Muestra articulos similares según la marca pasada
 * @param {String} marca
 */
function listaSimilar(marca) {
    let lista_similar = document.getElementById("lista_similar");
    let inputMarca = document.getElementById("marca2").value;
    let filtrar = (marca) => listadoCachimbas.filter(x => x.marca === marca);
    let filtro_cachimbas = filtrar(inputMarca);
    lista_similar.innerHTML = "";

    for (let a of filtro_cachimbas) {
        let liCachimba = document.createElement("li");
        liCachimba.innerHTML = a.marca + "<br>" + a.modelo + "<br>" + a.precio + "€";
        lista_similar.appendChild(liCachimba);
    }
}
/** @description Muestra los votos de un usuario
 * @param {String} usuario
 */
function votosUsuario(usuario) {
    let lista_de_votos = document.getElementById("lista_de_votos"); //Donde voy a pintarlo
    let inputPersona = document.getElementById("persona").value; //El input del nombre
    let UsuariosVotados = [];
    lista_de_votos.innerHTML = "";

    let filtrar = () => listaVoto.filter(x => x.persona.nombre === inputPersona);
    UsuariosVotados = filtrar();
    for (const votosPersona of UsuariosVotados) {
        let liVoto = document.createElement("li");
        liVoto.innerHTML = votosPersona.cachimba.marca;
        lista_de_votos.appendChild(liVoto);
    }
    if (!lista_de_votos.innerText) {
        let liVoto = document.createElement("li");
        liVoto.innerHTML = "No existe ese usuario o no tiene votos";
        lista_de_votos.appendChild(liVoto);
    }
}
/** @description Muestra los artículos filtrados por un precio inferior
 * @param {Int} precio
 */
function filtrarPrecio(precio) {
    let lista_de_precio = document.getElementById("lista_de_precio"); //Donde voy a pintarlo
    let inputPrecio = document.getElementById("precio2").value; //El input del nombre

    let filtrar = () => listadoCachimbas.filter(x => parseInt(x.precio) <= inputPrecio);
    let cachimba = filtrar();
    lista_de_precio.innerHTML = "";



    for (const a of cachimba) {
        let liCachimba = document.createElement("li");
        liCachimba.innerHTML = a.marca + "<br>" + a.modelo + "<br>" + a.precio + "€";
        lista_de_precio.appendChild(liCachimba);
    }
    if (!lista_de_precio.innerText) {
        let liCachimba = document.createElement("li");
        liCachimba.innerHTML = "No existen cachimba con menor precio al indicado";
        lista_de_precio.appendChild(liCachimba);
    }
}