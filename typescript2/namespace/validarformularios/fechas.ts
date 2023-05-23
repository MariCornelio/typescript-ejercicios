namespace ValidarFormularios {
  export function fechas(fecha: string): boolean {
    const exp = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;

    if (fecha.match(exp) && fecha != '') {
      return true;
    } else {
      return false;
    }
  }
}
