"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(gatito) {
    console.log(gatito);
}
function mostrarConsola(mostrar) {
    if (mostrar) {
        return log;
    }
    else {
        return () => { };
    }
}
let MiClase = class MiClase {
    constructor() {
        console.log('mensaje desde el constructor');
    }
};
MiClase = __decorate([
    mostrarConsola(false)
], MiClase);
let miclase = new MiClase();
