// Tipos de datos primitivos
// String

let mensaje: string;

mensaje = 'Hola Mundo!';

// Number

let resultado: number;
resultado = 9.5;

// let resultado error

// Boolean

let mayorEdad: boolean;
mayorEdad = true;

// Array

let frutas: string[];
let coches: Array<string>;

coches = ['Renault','Opel','Mercedes'];

//Any ("eliminar la inferencia")

let edad: any = 35;

edad = 'Cuarenta';

// Enum

enum TallaPantalon {small, medium, large};

let pantalon: TallaPantalon = TallaPantalon.small;

// devolvera 0

enum TallaZapato { uk5 = 43, uk6 = 45};

let zapatilla: TallaZapato = TallaZapato.uk5;

// console.log(zapatilla) devuelve 43

// Void

function saludo(): void {   // tipado de salida de función
    console.log('Hola Mundo!');
}

let variable: void = undefined;
variable = null;

// Tipado de objetos

let jugador: object;

jugador = {nombre: 'Cristiano', apellidos: 'Ronaldo'};

let jugador2: {nombre: string, edad: number};

jugador2 = {nombre: 'Cristiano', edad: 30};

// Tipos de unión

let fechaNac: number | string;

fechaNac = 'doce';

type id = string | number;

let ref:id;

ref = 123;
ref = 'A2346TY';

// Tipos de unión complejos

type perro = 'Pastor Alemán'| 'Dogo' | 'Mastín';

let toby: perro = 'Dogo';

// Tipos en funciones

function suma (a: number,b:number): number {
    return a + b;
}

// suma(2,'2'); error

// Parámetros opcionales

function multi (a: number, b: number, mensaje?: string): string {
    let resultado = a * b;
    if(mensaje){
        return mensaje + resultado;
    } else {
        return `El resultado es ${resultado}`;
    }
}

multi(2,4);

multi(4,5,'Puntuación: ');

// Tipos genéricos ("el tipo se definirá en tiempo de ejecución")


function devuelveResultado<T> (a:T): T{
    return a;
}

devuelveResultado<string>('Hola Mundo!');
devuelveResultado<number>(12);


