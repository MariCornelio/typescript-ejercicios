"use strict";
class PilaNumeros {
    constructor() {
        this.vector = [];
    }
    apilar(x) {
        this.vector.push(x);
    }
    retirar() {
        if (this.vector.length > 0) {
            return this.vector.pop();
        }
        else {
            return null;
        }
    }
}
class Pilastring {
    constructor() {
        this.vector = [];
    }
    apilar(x) {
        this.vector.push(x);
    }
    retirar() {
        if (this.vector.length > 0) {
            return this.vector.pop();
        }
        else {
            return null;
        }
    }
}
let pila1 = new PilaNumeros();
pila1.apilar(40);
pila1.apilar(20);
pila1.apilar(1);
console.log(pila1.retirar());
let pila2 = new Pilastring();
pila2.apilar('h');
pila2.apilar('k');
pila2.apilar('i');
console.log(pila2.retirar());
class PilaGenerica {
    constructor() {
        this.vector = [];
    }
    apilar(x) {
        this.vector.push(x);
    }
    retirar() {
        if (this.vector.length > 0) {
            return this.vector.pop();
        }
        else {
            return null;
        }
    }
}
let pila3;
pila3 = new PilaGenerica();
pila3.apilar(20);
pila3.apilar(50);
pila3.apilar(60);
pila3.apilar(70);
console.log(pila3.retirar());
let pila4;
pila4 = new PilaGenerica();
pila4.apilar('o');
pila4.apilar('t');
pila4.apilar('r');
console.log(pila4.retirar());
