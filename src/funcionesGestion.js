$(function() {
    $("#buscar1").click(filtrarElementos);
    $("#buscar2").click(filtrarMejorValorado);
    $("#buscar3").click(ordenarPrecio);
    $("#buscar4").click(ordenarMarca);
});

function filtrarElementos() {
    let inputPrecio = $("#precio").val();
    let inputMarca = $("#marca").val();
    $("#resultado").empty();
    for (let i = 0; i < listadoCachimbas.length; i++) {
        if (inputMarca === listadoCachimbas[i].marca && parseInt(inputPrecio) <= parseInt(listadoCachimbas[i].precio)) {
            let span = $("<span>" + listadoCachimbas[i].marca + " " + listadoCachimbas[i].modelo + " " + listadoCachimbas[i].precio + " €" + "</span><br>");
            $("#resultado").append(span);
        }
    }
}

function filtrarMejorValorado() {
    let inputMarca = $("#marcaValorada").val();
    $("#resultado2").empty();

    for (let i = 0; i < listaVoto.length; i++) {

        if (listaVoto[i].puntuacion && listaVoto[i].cachimba.marca === inputMarca) {
            let span = $("<span>" + listaVoto[i].cachimba.marca + " " + listaVoto[i].cachimba.modelo + " " + listaVoto[i].observaciones + "<p>✓</p>" + "</span><br>");
            $("#resultado2").append(span);
        }
    }

}

function ordenarPrecio() {
    $("#resultado3").empty();
    listadoCachimbas.sort(function(o1, o2) {
        if (parseInt(o1.precio) > parseInt(o2.precio)) {
            return 1;
        } else if (parseInt(o1.precio) < parseInt(o2.precio)) {
            return -1;
        }
        return 0;
    });
    for (i = 0; i < listadoCachimbas.length; i++) {
        let span = $("<span>" + listadoCachimbas[i].marca + " " + listadoCachimbas[i].modelo + " " + listadoCachimbas[i].precio + "€</span><br>");
        $("#resultado3").append(span);
    }
}

function ordenarMarca() {
    $("#resultado4").empty();
    listadoCachimbas.sort(function(o1, o2) {
        if (o1.marca > o2.marca) {
            return 1;
        } else if (o1.marca < o2.marca) {
            return -1;
        }
        return 0;
    });
    for (i = 0; i < listadoCachimbas.length; i++) {
        let span = $("<span>" + listadoCachimbas[i].marca + " " + listadoCachimbas[i].modelo + " " + listadoCachimbas[i].precio + "€</span><br>");
        $("#resultado4").append(span);
    }
}