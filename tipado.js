// Tipos de datos primitivos
// String
var mensaje;
mensaje = 'Hola Mundo!';
// Number
var resultado;
resultado = 9.5;
// let resultado error
// Boolean
var mayorEdad;
mayorEdad = true;
// Array
var frutas;
var coches;
coches = ['Renault', 'Opel', 'Mercedes'];
//Any ("eliminar la inferencia")
var edad = 35;
edad = 'Cuarenta';
// Enum
var TallaPantalon;
(function (TallaPantalon) {
    TallaPantalon[TallaPantalon["small"] = 0] = "small";
    TallaPantalon[TallaPantalon["medium"] = 1] = "medium";
    TallaPantalon[TallaPantalon["large"] = 2] = "large";
})(TallaPantalon || (TallaPantalon = {}));
;
var pantalon = TallaPantalon.small;
// devolvera 0
var TallaZapato;
(function (TallaZapato) {
    TallaZapato[TallaZapato["uk5"] = 43] = "uk5";
    TallaZapato[TallaZapato["uk6"] = 45] = "uk6";
})(TallaZapato || (TallaZapato = {}));
;
var zapatilla = TallaZapato.uk5;
// console.log(zapatilla) devuelve 43
// Void
function saludo() {
    console.log('Hola Mundo!');
}
var variable = undefined;
variable = null;
// Tipado de objetos
var jugador;
jugador = { nombre: 'Cristiano', apellidos: 'Ronaldo' };
var jugador2;
jugador2 = { nombre: 'Cristiano', edad: 30 };
// Tipos de unión
var fechaNac;
fechaNac = 'doce';
var ref;
ref = 123;
ref = 'A2346TY';
var toby = 'Dogo';
// Tipos en funciones
function suma(a, b) {
    return a + b;
}
// suma(2,'2'); error
// Parámetros opcionales
function multi(a, b, mensaje) {
    var resultado = a * b;
    if (mensaje) {
        return mensaje + resultado;
    }
    else {
        return "El resultado es " + resultado;
    }
}
multi(2, 4);
multi(4, 5, 'Puntuación: ');
// Tipos genéricos ("el tipo se definirá en tiempo de ejecución")
function devuelveResultado(a) {
    return a;
}
devuelveResultado('Hola Mundo!');
devuelveResultado(12);
