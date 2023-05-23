"use strict";
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
