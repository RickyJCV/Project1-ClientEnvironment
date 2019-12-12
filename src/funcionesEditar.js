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

    let botonCrearUsuario = document.getElementById("crearUsuario");
    botonCrearUsuario.addEventListener("click", validarFormulario2);

    let edad = document.getElementById("edad");
    edad.addEventListener("keyup", validarEdad);

    let nombre = document.getElementById("nombre");
    nombre.addEventListener("keyup", validarNombre);

    let codigo = document.getElementById("codigo");
    codigo.addEventListener("keyup", validarCodigo);
})

function crearElemento() {
    let inputPrecio = document.getElementById("precio").value; //El input del precio
    let inputMarca = document.getElementById("marca").value; //El input de marca
    let inputModelo = document.getElementById("modelo").value; //El input del modelo


    crearCachimba(inputPrecio, inputMarca, inputModelo);
    alert("CACHIMBA CREADA");

}

function crearUsuario() {
    let inputNombre = document.getElementById("nombre").value; //El input del precio
    let inputEdad = document.getElementById("edad").value; //El input de marca
    let inputCodigo = document.getElementById("codigo").value; //El input del modelo

    crearPersona(inputNombre, inputEdad, inputCodigo);
    filtrarVotos();
    alert("USUARIO CREADO");

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

function validarFormulario2(event) {
    event.preventDefault();

    let esFormularioCorrecto = false;
    let esCorrectoNombre = validarNombre();
    let esCorrectoEdad = validarEdad();
    let esCorrectoCodigo = validarCodigo();
    if (esCorrectoNombre &&
        esCorrectoEdad &&
        esCorrectoCodigo) {
        esFormularioCorrecto = true;
    }
    if (esFormularioCorrecto) {
        crearUsuario();
    }
}


function validarNombre() {
    let esCorrecto = true;
    let nombre = document.getElementById("nombre");
    let valor = nombre.value.trim();
    let listaErrores = document.getElementById("erroresNombre");
    listaErrores.innerHTML = "";
    nombre.classList.remove("inputErroneo");
    nombre.classList.remove("inputCorrecto");
    let expresion = /^[a-zA-Z]+$/g;
    if (!expresion.test(valor) || valor === "") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE LETRAS";
        listaErrores.appendChild(divError);
    }
    if (esCorrecto) {
        nombre.classList.add("inputCorrecto");
    } else {
        nombre.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarCodigo() {
    let esCorrecto = true;
    let codigo = document.getElementById("codigo");
    let valor = codigo.value.trim();
    let listaErrores = document.getElementById("erroresCodigo");
    listaErrores.innerHTML = "";
    codigo.classList.remove("inputErroneo");
    codigo.classList.remove("inputCorrecto");
    let expresion = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;

    if (!expresion.test(valor) || valor === "") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "ESE CODIGO POSTAL NO EXISTE";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        codigo.classList.add("inputCorrecto");
    } else {
        codigo.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarEdad(event) {
    let esCorrecto = true;
    let edad = document.getElementById("edad");
    let valor = edad.value.trim();
    let listaErrores = document.getElementById("erroresEdad");
    listaErrores.innerHTML = "";
    edad.classList.remove("inputErroneo");
    edad.classList.remove("inputCorrecto");

    if (!/^[0-9]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE NÚMEROS";
        listaErrores.appendChild(divError);
    }
    if (valor < 18) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBE SER MAYOR DE EDAD";
        listaErrores.appendChild(divError);
    }
    if (esCorrecto) {
        edad.classList.add("inputCorrecto");
    } else {
        edad.classList.add("inputErroneo");
    }
    return esCorrecto;
}