namespace ValidarFormularios {
  export function correos(correo: string): boolean {
    const exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (exp.test(correo)) {
      return true;
    } else {
      return false;
    }
  }
}
