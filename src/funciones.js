document.addEventListener("DOMContentLoaded", function() {
    let botonEnviar = document.getElementById("buscar");
    botonEnviar.addEventListener("click", filtroMarcaPrecio);
    let botonSimilar = document.getElementById("buscarMarcaSimilar");
    botonSimilar.addEventListener("click", listaSimilar);
    let botonVotos = document.getElementById("botonVotos");
    botonVotos.addEventListener("click", votosUsuario);
    let botonPrecio = document.getElementById("botonPrecio");
    botonPrecio.addEventListener("click", filtrarPrecio);

})

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
    for (let a of filtro_cachimbas) {
        liCachimba.innerHTML = a.marca + "<br>" + a.modelo + "<br>" + a.precio;
        lista_cachimbas.appendChild(liCachimba);
    }
    if (filtro_cachimbas[0] === undefined) {
        let liCachimba = document.createElement("li");
        liCachimba.innerHTML = "No existe una cachimba con estas caracteristicas";
        lista_cachimbas.appendChild(liCachimba);
    }
}

function listaSimilar(marca) {
    let lista_similar = document.getElementById("lista_similar");
    let inputMarca = document.getElementById("marca2").value;
    let filtrar = (marca) => listadoCachimbas.filter(x => x.marca === marca);
    let filtro_cachimbas = filtrar(inputMarca);


    for (let a of filtro_cachimbas) {
        let liCachimba = document.createElement("li");
        liCachimba.innerHTML = a.marca + "<br>" + a.modelo + "<br>" + a.precio;
        lista_similar.appendChild(liCachimba);
    }
}

function votosUsuario(usuario) {
    let lista_de_votos = document.getElementById("lista_de_votos"); //Donde voy a pintarlo
    let inputPersona = document.getElementById("persona").value; //El input del nombre
    let UsuariosVotados = [];
    let filtrar = () => listaVoto.filter(x => x.persona.nombre === inputPersona);
    UsuariosVotados = filtrar();
    for (const votosPersona of UsuariosVotados) {
        let liVoto = document.createElement("li");
        liVoto.innerHTML = votosPersona.cachimba.marca;
        lista_de_votos.appendChild(liVoto);
    }
}

function filtrarPrecio(precio) {
    let lista_de_precio = document.getElementById("lista_de_precio"); //Donde voy a pintarlo
    let inputPrecio = document.getElementById("precio2").value; //El input del nombre

    let filtrar = () => listadoCachimbas.filter(x => parseInt(x.precio) < inputPrecio);
    let cachimba = filtrar();

    for (const a of cachimba) {
        let liCachimba = document.createElement("li");
        liCachimba.innerHTML = a.marca + "<br>" + a.modelo + "<br>" + a.precio;
        lista_de_precio.appendChild(liCachimba);
    }

}