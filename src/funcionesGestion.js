$(function () {
    $("#buscar1").click(filtrarElementos);
});

function filtrarElementos() {
    let inputPrecio = $("#precio").val();
    let inputMarca = $("#marca").val();

    for (let i = 0; i < listadoCachimbas.length; i++) {
        if (inputMarca === listadoCachimbas[i].marca) {
            console.log(listadoCachimbas[i]);
        }

    }
}