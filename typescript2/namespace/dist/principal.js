"use strict";
var ValidarFormularios;
(function (ValidarFormularios) {
    function correos(correo) {
        const exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (exp.test(correo)) {
            return true;
        }
        else {
            return false;
        }
    }
    ValidarFormularios.correos = correos;
})(ValidarFormularios || (ValidarFormularios = {}));
var ValidarFormularios;
(function (ValidarFormularios) {
    function fechas(fecha) {
        const exp = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
        if (fecha.match(exp) && fecha != '') {
            return true;
        }
        else {
            return false;
        }
    }
    ValidarFormularios.fechas = fechas;
})(ValidarFormularios || (ValidarFormularios = {}));
var ValidarFormularios;
(function (ValidarFormularios) {
    function nombres(nombre) {
        if (typeof nombre == 'undefined' || nombre.length > 3 || nombre === '') {
            return true;
        }
        else {
            return false;
        }
    }
    ValidarFormularios.nombres = nombres;
})(ValidarFormularios || (ValidarFormularios = {}));
/// <reference path="validarformularios/correos.ts" />
/// <reference path="validarformularios/fechas.ts" />
/// <reference path="validarformularios/nombres.ts" />
console.log(ValidarFormularios.correos('hola-2@hotmail.com')
    ? 'Correo valido'
    : 'Correo invalido');
console.log(ValidarFormularios.fechas('hola-2@hotmail.com')
    ? 'Fecha valido'
    : 'Fecha invalido');
