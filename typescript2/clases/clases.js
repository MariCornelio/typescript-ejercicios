"use strict";
class Mascota {
    constructor(nombre_mascota) {
        this.nombre = nombre_mascota;
    }
    obtenerNombre() {
        return this.nombre;
    }
    static consulta() {
        return 30;
    }
}
let perro = new Mascota('Totoro Zorro');
// perro es un objeto de la clase Mascota
console.log(perro);
// Mascota{nombre:zorro};
console.log(perro.obtenerNombre());
console.log('costo de la consulta: ' + Mascota.consulta());
