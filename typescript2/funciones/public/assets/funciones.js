"use strict";
// ejemplo1
let articulo = 'televisor';
function mostrar_producto() {
    return articulo;
}
console.log(mostrar_producto());
// ejemplo2
let descuento = function () {
    return true;
};
// ejemplo3 parametros obligatorios deben ser utilizados
function detalleproducto(modelo, tamanio) {
    return `${modelo} - ${tamanio} Pulgadas`;
}
console.log(detalleproducto('LG', 50));
// parametros opcionales
function Envios(direccion, costo) {
    if (costo) {
        return `${direccion} Costo:${costo} soles `;
    }
    else {
        return direccion;
    }
}
console.log(Envios('villa el salvador'));
// parametros por defecto
function cliente(nombre, apellido, mayuscula = true) {
    if (mayuscula) {
        return mayusculas(nombre) + ' ' + mayusculas(apellido);
    }
    else {
        return `${nombre} ${apellido}`;
    }
}
function mayusculas(texto) {
    return texto.toUpperCase();
}
console.log(cliente('mari', 'cornelio', false));
// por defecto
console.log(cliente('mari', 'cornelio'));
// Parametros de tipo REST
function DetalleCompleto(marca, ...otrosParametros) {
    return marca + ' ' + otrosParametros.join(' ');
}
console.log(DetalleCompleto('Addidas'));
console.log(DetalleCompleto('Addidas', 'x', 'y'));
// definir reglas en una función
function sumar(a, b) {
    return a + b;
}
function tuNombre(nombre) {
    return nombre;
}
function saludo2() {
    console.log('Hola, soy mari');
}
let miFuncion;
miFuncion = sumar;
console.log(miFuncion(2, 5));
// miFuncion = tuNombre;
// console.log(miFuncion('katy'));
// miFuncion = saludo;
// miFuncion();
