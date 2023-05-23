function log(gatito: Function): void {
  console.log(gatito);
}

function mostrarConsola(mostrar: boolean): Function {
  if (mostrar) {
    return log;
  } else {
    return () => {};
  }
}

@mostrarConsola(false)
class MiClase {
  constructor() {
    console.log('mensaje desde el constructor');
  }
}
let miclase = new MiClase();
