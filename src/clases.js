class cachimba {
	constructor(precio, marca, modelo, listaVotos) {
		this._precio = precio;
		this._marca = marca;
		this._modelo = modelo;
		this._listaVotos = []; //Es un Array de la clase lista de votos
	}
	get precio() { return this._precio; }
	get marca() { return this._marca; }
	get modelo() { return this._modelo; }
	get listaVotos() { return this._listaVotos; }
	set precio(precio) { this._precio = precio; }
	set marca(marca) { this._marca = marca; }
	set modelo(modelo) { this._modelo = modelo; }
	set listaVotos(listaVotos) { this._listaVotos = listaVotos; }
}

class votos {
	constructor(cachimba, persona) {
		this._cachimba = cachimba;
		this._persona = []; //Aqui le pasamos el array de persona
	}
	get cachimba() { return this._cachimba; }
	get persona() { return this._persona; }
	set cachimba(cachimba) { this._cachimba = cachimba; }
	set persona(persona) { this._persona = persona; }
}

class persona {
	constructor(nombre, edad, codigoPostal) {
		this._nombre = nombre;
		this._edad = edad;
		this._codigoPostal = codigoPostal;
	}
	get nombre() { return this._nombre; }
	get edad() { return this._edad; }
	get codigoPostal() { return this._codigoPostal; }
	set nombre(nombre) { this._nombre = nombre; }
	set edad(edad) { this._edad = edad; }
	set codigoPostal(codigoPostal) { this._codigoPostal = codigoPostal; }
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