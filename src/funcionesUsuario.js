$(function () {
    rellenarModelos();


});

function rellenarModelos() {
    console.log("rellar")
    for (let i = 0; i < listadoCachimbas.length; i++) {
        let span = $("<option value =\"" + listadoCachimbas[i].modelo + "\">" + listadoCachimbas[i].modelo + "</option>");
        $("#modelo").append(span);
    }

}