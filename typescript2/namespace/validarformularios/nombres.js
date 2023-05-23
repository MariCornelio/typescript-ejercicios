"use strict";
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
