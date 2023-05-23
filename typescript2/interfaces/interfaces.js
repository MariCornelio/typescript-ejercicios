"use strict";
// ejemplos 1
let alumno1 = {
    nombre: 'Mari',
    apellido: 'CZ',
};
let nota = {
    mostrarcalificacion() {
        console.log('100puntos');
    },
};
console.log(alumno1);
nota.mostrarcalificacion();
// ejemplo2
// combinando clases e interfaces
class SaludarEspaniol {
    decirHola() {
        return 'Hola :)';
    }
}
class SaludarIngles {
    decirHola() {
        return 'Hi :)';
    }
}
let yo = new SaludarEspaniol();
console.log(yo.decirHola());
let yo2 = new SaludarIngles();
console.log(yo2.decirHola());
// ejemplos 3
class MiClase {
    metodo1() {
        return 'retorna un string ';
    }
    metodo2() {
        return 23;
    }
}
let prueba1 = new MiClase();
let prueba2 = new MiClase();
console.log(prueba1.metodo1() + prueba2.metodo2());
