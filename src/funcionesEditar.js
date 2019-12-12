document.addEventListener("DOMContentLoaded", function() {
    let botonCrearElemento = document.getElementById("crearElemento2");
    botonCrearElemento.addEventListener("click", validarFormulario);

    let inputPrecio = document.getElementById("precio");
    inputPrecio.addEventListener("keyup", validarPrecio);

    let inputMarca = document.getElementById("marca");
    inputMarca.addEventListener("focus", validarMarca);

    let inputModelo = document.getElementById("modelo");
    inputModelo.addEventListener("change", validarModelo);

    filtrarVotos();

    let inputUsuario = document.getElementById("cambiar");
    inputUsuario.addEventListener("click", cambiarUsuario);
})

function crearElemento() {
    let inputPrecio = document.getElementById("precio").value; //El input del precio
    let inputMarca = document.getElementById("marca").value; //El input de marca
    let inputModelo = document.getElementById("modelo").value; //El input del modelo


    crearCachimba(inputPrecio, inputMarca, inputModelo);
    alert("CACHIMBA CREADA");

}

function validarPrecio(event) {
    let esCorrecto = true;
    let inputPrecio = document.getElementById("precio");
    let valor = inputPrecio.value.trim();
    let listaErrores = document.getElementById("erroresPrecio");
    listaErrores.innerHTML = "";
    inputPrecio.classList.remove("inputErroneo");
    inputPrecio.classList.remove("inputCorrecto");

    if (!/^[0-9]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE NÚMEROS";
        listaErrores.appendChild(divError);
    }
    if (valor < 10) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBE COSTAR MAS DE 10€";
        listaErrores.appendChild(divError);
    }
    if (esCorrecto) {
        inputPrecio.classList.add("inputCorrecto");
    } else {
        inputPrecio.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarMarca(event) {
    let esCorrecto = true;
    let inputMarca = document.getElementById("marca");
    let valor = inputMarca.value.trim();
    let listaErrores = document.getElementById("erroresMarca");
    listaErrores.innerHTML = "";
    inputMarca.classList.remove("inputErroneo");
    inputMarca.classList.remove("inputCorrecto");

    if (valor === "") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "NO PUEDE ESTAR VACÍO";
        listaErrores.appendChild(divError);
    }
    if (esCorrecto) {
        inputMarca.classList.add("inputCorrecto");
    } else {
        inputMarca.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarModelo(event) {
    let esCorrecto = true;
    let inputModelo = document.getElementById("modelo");
    let valor = inputModelo.value.trim();
    let listaErrores = document.getElementById("erroresModelo");
    listaErrores.innerHTML = "";
    inputModelo.classList.remove("inputErroneo");
    inputModelo.classList.remove("inputCorrecto");

    if (valor === "") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "NO PUEDE ESTAR VACÍO";
        listaErrores.appendChild(divError);
    }
    if (esCorrecto) {
        inputModelo.classList.add("inputCorrecto");
    } else {
        inputModelo.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarFormulario(event) {
    event.preventDefault();

    let esFormularioCorrecto = false;
    let esCorrectoPrecio = validarPrecio();
    let esCorrectoMarca = validarMarca();
    let esCorrectoModelo = validarModelo();
    if (esCorrectoPrecio &&
        esCorrectoMarca &&
        esCorrectoModelo) {
        esFormularioCorrecto = true;
    }
    if (esFormularioCorrecto) {
        crearElemento();
    }
}

function filtrarVotos() {
    let borrar = document.getElementById("votos");
    if (borrar.hasChildNodes()) {
        while (borrar.childNodes.length >= 1) {
            borrar.removeChild(borrar.firstChild);
        }
    }
    let borrar2 = document.getElementById("usuario");
    if (borrar2.hasChildNodes()) {
        while (borrar2.childNodes.length >= 1) {
            borrar2.removeChild(borrar2.firstChild);
        }
    }
    var b = 0;
    for (let a of listaVoto) {
        var x = document.createElement("OPTION");
        x.setAttribute("value", a.cachimba.marca + " " + a.persona.nombre);
        x.setAttribute("id", b);
        b++;
        var t = document.createTextNode(a.cachimba.marca + " " + a.cachimba.modelo + " " + a.cachimba.precio + "/" + a.persona.nombre);
        x.appendChild(t);
        document.getElementById("votos").appendChild(x);
    }
    var c = 0;
    for (let a of listaPersona) {
        var x = document.createElement("OPTION");
        x.setAttribute("value", a.nombre);
        x.setAttribute("id", c);
        c++;
        var t = document.createTextNode(a.nombre);
        x.appendChild(t);
        document.getElementById("usuario").appendChild(x);
    }

}

function cambiarUsuario() {
    let votos = document.getElementById("votos");
    let usuario = document.getElementById("usuario");
    let id = votos.options[votos.selectedIndex].id;
    let usuarios = usuario.options[usuario.selectedIndex].id

    listaVoto[id].persona = listaPersona[usuarios];
    filtrarVotos();

}