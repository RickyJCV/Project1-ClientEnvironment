$(function () {
    rellenarModelos();
    $("#votar").click(votarCachimba);
    $("#usuario1").change(filtrarVoto);
});

function rellenarModelos() {

    for (let i = 0; i < listadoCachimbas.length; i++) {
        let span = $("<option id =\"" + i + "\" value =\"" + listadoCachimbas[i].modelo + "\">" + listadoCachimbas[i].modelo + "</option>");
        $("#modelo").append(span);
    }
}
function votarCachimba() {
    let inputUsuario = $("#usuario").val();
    let inputModelo = $("#modelo").val();
    let inputPuntuacion = $("#puntuacion").val();
    let textArea = $("#opinion").val();
    var id = $("#usuario").children(":selected").attr("id");
    var idModelo = $("#modelo").children(":selected").attr("id");
    crearVoto(listaPersona[id], listadoCachimbas[idModelo], inputPuntuacion, textArea);
    alert("Voto añadido correctamente")
}
function filtrarVoto() {
    $("#resultado").empty();
    let inputUsuario = $("#usuario1").val();
    var id = $("#usuario1").children(":selected").attr("id");

    for (let i = 0; i < listaVoto.length; i++) {
        if (listaVoto[i].persona.nombre === inputUsuario) {
            console.log(listaVoto[i].cachimba.modelo)
            let span = $("<span>" + listaVoto[i].cachimba.modelo + " " + listaVoto[i].observaciones + "</span><br>");
            $("#resultado").append(span);
        }
    }
}