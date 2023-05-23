namespace ValidarFormularios {
  export function nombres(nombre: string): boolean {
    if (typeof nombre == 'undefined' || nombre.length > 3 || nombre === '') {
      return true;
    } else {
      return false;
    }
  }
}
