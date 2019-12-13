$(function () {
    $("#buscar1").click(filtrarElementos);
    $("#buscar2").click(filtrarMejorValorado);
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
    console.log(inputMarca);
    $("#resultado2").empty();

    for (let i = 0; i < listaVoto.length; i++) {

        if (listaVoto[i].puntuacion && listaVoto[i].cachimba.marca === inputMarca) {
            let span = $("<span>" + listaVoto[i].cachimba.marca + " " + listaVoto[i].cachimba.modelo + " " + listaVoto[i].observaciones + "<p>✓</p>" + "</span><br>");
            $("#resultado2").append(span);
        }
    }



}