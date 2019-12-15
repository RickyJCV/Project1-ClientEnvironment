$(function () {
    rellenarModelos();
    $("#votar").click(votarCachimba);
    $("#usuario1").change(filtrarVoto);
    $("#usuario2").change(filtrarVotosPositivos);
    $("#usuario3").change(mostrarDatosUsuario);
});
/** @description Rellena los modelos de cachimbas
 */
function rellenarModelos() {

    for (let i = 0; i < listadoCachimbas.length; i++) {
        let span = $("<option id =\"" + i + "\" value =\"" + listadoCachimbas[i].modelo + "\">" + listadoCachimbas[i].modelo + "</option>");
        $("#modelo").append(span);
    }
}
/** @description Una función que sirve para votar por una cachimba
 */
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
/** @description Una función que filtra por los votos
 */
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
/** @description Una función que filtra por los votos positivos
 */
function filtrarVotosPositivos() {
    $("#resultado2").empty();
    let inputUsuario = $("#usuario2").val();
    var id = $("#usuario2").children(":selected").attr("id");

    for (let i = 0; i < listaVoto.length; i++) {
        if (listaVoto[i].persona.nombre === inputUsuario) {
            for (let j = 0; j < listadoCachimbas.length; j++) {
                if (listaVoto[i].cachimba.marca === listadoCachimbas[j].marca) {
                    let span = $("<span>" + listadoCachimbas[j].marca + " " + listadoCachimbas[j].modelo + "</span><br>");
                    $("#resultado2").append(span);
                }
            }
        }
    }
}
/** @description Una función muestra los datos de un usuario
 */
function mostrarDatosUsuario() {
    $("#resultado3").empty();
    let inputUsuario = $("#usuario3").val();
    var id = $("#usuario3").children(":selected").attr("id");

    for (let i = 0; i < listaPersona.length; i++) {
        if (listaPersona[i].nombre === inputUsuario) {
            let span = $("<span>" + "Nombre: " + listaPersona[i].nombre + "<br>" + "Edad: " + listaPersona[i].edad + "<br>" + "Código Postal: " + listaPersona[i].codigoPostal + "</span><br>");
            $("#resultado3").append(span);
        }
    }
}