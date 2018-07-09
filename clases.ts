class Jugador {
    public nombre: string;
    public dorsal: number;
    public goles: number = 0;

    constructor(nombre: string, dorsal: number){
        this.nombre = nombre;
        this.dorsal = dorsal;
    }

    marcarGol(): void {
        this.goles++;
    }
}

let jugador1 = new Jugador('Cristiano Ronaldo', 7);

console.log(jugador1.nombre);

jugador1.marcarGol();

//jugador1.faltas = 12; error

// Constructor breve

class Player {
    constructor(public nombre: string, public dorsal: number, public goles?: number) {
        this.nombre = nombre;
        this.dorsal = dorsal;
        this.goles = goles ? goles : 0 ;
    }

    marcarGol(): void {
        this.goles++;
    }
}

let jugador2 = new Player('David de Gea',1);

console.log(jugador2.goles);

// Módulos

export class Empleado {
    public nombre: string;
    public departamento: string;

    constructor(nombre: string, departamento: string){
        this.nombre = nombre;
        this.departamento = departamento;
    }
}





