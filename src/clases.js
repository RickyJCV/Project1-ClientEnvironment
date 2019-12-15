class cachimba {
	constructor(precio, marca, modelo) {
		this._precio = precio;
		this._marca = marca;
		this._modelo = modelo;
		this._votos = []; //Es un Array de la clase lista de votos
	}
	get precio() { return this._precio; }
	get marca() { return this._marca; }
	get modelo() { return this._modelo; }
	get() { return this._votos; }
	set precio(precio) { this._precio = precio; }
	set marca(marca) { this._marca = marca; }
	set modelo(modelo) { this._modelo = modelo; }
	set(votos) { this._votos = votos; }
	addVoto(voto) {
		this._votos.push(voto);
	}
}

class voto {
	constructor(persona, cachimba, puntuacion, observaciones) {
		this._cachimba = cachimba;
		this._persona = persona; //Aqui le pasamos el array de persona
		this._puntuacion = puntuacion;
		this._observaciones = observaciones;
	}
	get cachimba() { return this._cachimba; }
	get persona() { return this._persona; }
	get puntuacion() { return this._puntuacion; }
	get observaciones() { return this._observaciones; }
	set puntuacion(puntuacion) { this._puntuacion = puntuacion; }
	set observaciones(observaciones) { this._observaciones = observaciones; }
	set cachimba(cachimba) { this._cachimba = cachimba; }
	set persona(persona) { this._persona = persona; }
}

class persona {
	constructor(nombre, edad, codigoPostal) {
		this._nombre = nombre;
		this._edad = edad;
		this._codigoPostal = codigoPostal;
		this._votos = [];
	}
	get nombre() { return this._nombre; }
	get edad() { return this._edad; }
	get codigoPostal() { return this._codigoPostal; }
	set nombre(nombre) { this._nombre = nombre; }
	set edad(edad) { this._edad = edad; }
	set codigoPostal(codigoPostal) { this._codigoPostal = codigoPostal; }
	set(votos) { this._votos = votos; }
	addVoto(voto) {
		this._votos.push(voto);
	}

}

class tienda {
	constructor(cachimbas, direccion, ceo) {
		this._cachimbas = [];
		this._direccion = direccion;
		this._ceo = ceo;
	}
	get cachimbas() { return this._cachimbas; }
	get direccion() { return this._direccion; }
	get ceo() { return this._ceo; }
	set cachimbas(cachimbas) { this._cachimbas = cachimbas; }
	set direccion(direccion) { this._direccion = direccion; }
	set ceo(ceo) { this._ceo = ceo; }
}

let persona1 = new persona("Daniel", 23, "41020");
let persona2 = new persona("Ricardo", 23, "41019");
let persona3 = new persona("Pablo", 19, "41019");

let cachimba1 = new cachimba("30", "Kaya", "PNX580");
let cachimba2 = new cachimba("180", "Starbuzz", "Carbine");
let cachimba3 = new cachimba("80", "Khalil-mamoon", "Single-kamanja");
let cachimba4 = new cachimba("180", "Mig", "M2");
let cachimba5 = new cachimba("60", "Caesar", "C36");
let cachimba6 = new cachimba("30", "Caesar", "C67");
let cachimba7 = new cachimba("80", "Kaya", "PN480");
let cachimba8 = new cachimba("100", "Starbuzz", "Challenger");
let cachimba9 = new cachimba("35", "Kaya", "PN330");
let cachimba10 = new cachimba("40", "Kaya", "Magis");
let cachimba11 = new cachimba("45", "Kaya", "Benbe");
let cachimba12 = new cachimba("55", "Kaya", "Sarabia");
let cachimba13 = new cachimba("60", "Kaya", "Wakaso");
let cachimba14 = new cachimba("68", "Kaya", "Cescs");
let cachimba15 = new cachimba("70", "Kaya", "Univc");
let cachimba16 = new cachimba("55", "Kaya", "Vaclick");
let cachimba17 = new cachimba("57", "Kaya", "Sarabia");

let voto1 = new voto(persona1, cachimba1, true, "Muy bonita");

let voto2 = new voto(persona2, cachimba2, false, "Muy fea");

let voto3 = new voto(persona3, cachimba3, true, "Elegante");

let voto4 = new voto(persona1, cachimba4, true, "Exquisita");

let voto5 = new voto(persona2, cachimba4, false, "Horrorosa");

let voto6 = new voto(persona2, cachimba13, true, "Tremebunda");


let listadoCachimbas = [cachimba1, cachimba2, cachimba3, cachimba4, cachimba5, cachimba6, cachimba7, cachimba8, cachimba9, cachimba10, cachimba11, cachimba12, cachimba13, cachimba14, cachimba15, cachimba16, cachimba17];
let listaPersona = [persona1, persona2, persona3];
let listaVoto = [voto1, voto2, voto3, voto4, voto5, voto6];

function crearVoto(persona, cachimba, puntuacion, observaciones) {
	let Voto = new voto(persona, cachimba, puntuacion, observaciones);
	persona.addVoto(Voto);
	cachimba.addVoto(Voto);
	listaVoto.push(Voto);
}

function crearCachimba(precio, marca, modelo) {
	let Cachimba = new cachimba(precio, marca, modelo);
	listadoCachimbas.push(Cachimba);
}

function crearPersona(nombre, edad, codigoPostal) {
	let Persona = new persona(nombre, edad, codigoPostal);
	listaPersona.push(Persona);
}