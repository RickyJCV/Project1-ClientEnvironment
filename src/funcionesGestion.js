$(function () {
	$("#buscar1").click(filtrarElementos);
	$("#buscar2").click(filtrarMejorValorado);
	$("#buscar3").click(ordenarPrecio);
	$("#buscar4").click(ordenarMarca);
	$("#precio").keyup(validarPrecio);
	ActivarAlerta();
});
/** @description Función que valida el precio
 */
function validarPrecio() {
	let esCorrecto = true;
	let inputPrecio = $("#precio").val();
	$("#erroresPrecio").empty();
	$("#precio").removeClass("inputErroneo");
	$("#precio").removeClass("inputCorrecto");
	if (!/^[0-9]+$/.test(inputPrecio)) {
		let span = $("<span>Solo puedes introducir numeros</span>");
		$("#erroresPrecio").append(span);
		$("#precio").addClass("inputErroneo");
		esCorrecto = false;
	}
	return esCorrecto;
}
/** @description Función que obtenga 10 elementos que cumplan varios requisitos a la vez.
    En esta funcion vamos a sacar 10 cachimbas de la marca Kaya con un precio superior a 30 €
 */
function filtrarElementos() {
	let inputPrecio = $("#precio").val();
	let inputMarca = $("#marca").val();
	$("#resultado").empty();
	if (validarPrecio()) {
		for (let i = 0; i < listadoCachimbas.length; i++) {
			if (inputMarca === listadoCachimbas[i].marca && parseInt(inputPrecio) <= parseInt(listadoCachimbas[i].precio)) {
				let span = $("<span>" + listadoCachimbas[i].marca + " " + listadoCachimbas[i].modelo + " " + listadoCachimbas[i].precio + " €" + "</span><br>");
				$("#resultado").append(span);
			}
		}
	}
}

/** @description Función que deba obtener el elemento mejor valorado y además que cumpla varios requisitos a la vez.
        El mejor valorado de una marca concreta
 */
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

/** @description Función que ordene los elementos según el campo especificado.
        oredena todas las cachimbas por precio de menor a mayor
 */
function ordenarPrecio() {
	$("#resultado3").empty();
	listadoCachimbas.sort(function (o1, o2) {
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

/** @description Una función definida por el alumno y que encaje en la funcionalidad de la página.
        ordenar alfabeticamente por marca
 */
function ordenarMarca() {
	$("#resultado4").empty();
	listadoCachimbas.sort(function (o1, o2) {
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
function ActivarAlerta() {
	//Se activa el método alert luego de 5 segundos
	setTimeout("alert('Hola miamol estas viendo funciones solo? enserio?')", 5000);
}