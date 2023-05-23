"use strict";
/// <reference path="validarformularios/correos.ts" />
/// <reference path="validarformularios/fechas.ts" />
/// <reference path="validarformularios/nombres.ts" />
console.log(ValidarFormularios.correos('hola-2@hotmail.com')
    ? 'Correo valido'
    : 'Correo invalido');
console.log(ValidarFormularios.fechas('hola-2@hotmail.com')
    ? 'Fecha valido'
    : 'Fecha invalido');
