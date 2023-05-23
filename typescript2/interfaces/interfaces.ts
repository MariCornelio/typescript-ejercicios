interface Alumno {
  nombre: string;
  apellido: string;
  edad?: number;
}
interface Calificacion {
  mostrarcalificacion(): void;
}

interface Saludar {
  decirHola(): string;
}

// combinando interfaces
interface MiInterface1 {
  metodo1(): string;
}
interface MiInterface2 {
  metodo2(): number;
}

// ejemplos 1
let alumno1: Alumno = {
  nombre: 'Mari',
  apellido: 'CZ',
};
let nota: Calificacion = {
  mostrarcalificacion() {
    console.log('100puntos');
  },
};

console.log(alumno1);
nota.mostrarcalificacion();

// ejemplo2
// combinando clases e interfaces
class SaludarEspaniol implements Saludar {
  decirHola() {
    return 'Hola :)';
  }
}
class SaludarIngles implements Saludar {
  decirHola() {
    return 'Hi :)';
  }
}

let yo: Saludar = new SaludarEspaniol();
console.log(yo.decirHola());
let yo2: Saludar = new SaludarIngles();
console.log(yo2.decirHola());

// ejemplos 3
class MiClase implements MiInterface1, MiInterface2 {
  metodo1() {
    return 'retorna un string ';
  }
  metodo2() {
    return 23;
  }
}

let prueba1: MiInterface1 = new MiClase();
let prueba2: MiInterface2 = new MiClase();

console.log(prueba1.metodo1() + prueba2.metodo2());
