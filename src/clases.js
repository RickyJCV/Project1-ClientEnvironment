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
    constructor(cachimba, persona, puntuacion, observaciones) {
        this._cachimba = cachimba;
        this._persona = persona; //Aqui le pasamos el array de persona
        this._puntuacion = puntuacion;
        this._observaciones = observaciones;
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
let cachimba9 = new cachimba("155", "Kaya", "PN330");
let cachimba10 = new cachimba("68", "Starbuzz", "Ultimate");

let voto1 = new voto(persona1, cachimba1, true, "Muy bonita");
cachimba1.addVoto(voto1);
// persona1.addVoto(voto1);

let voto2 = new voto(persona2, cachimba2, false, "Muy fea");
cachimba2.addVoto(voto2);
// persona2.addVoto(voto2);

let voto3 = new voto(persona3, cachimba3, true, "Elegante");
cachimba3.addVoto(voto3);
// persona3.addVoto(voto3);

let voto4 = new voto(persona1, cachimba4, true, "Exquisita");
cachimba4.addVoto(voto4);
// persona1.addVoto(voto4);

let voto5 = new voto(persona2, cachimba4, false, "Horrorosa");
cachimba4.addVoto(voto5);
// persona2.addVoto(voto5);

let listadoCachimbas = [cachimba1, cachimba2, cachimba3, cachimba4, cachimba5, cachimba6, cachimba7, cachimba8, cachimba9, cachimba10]