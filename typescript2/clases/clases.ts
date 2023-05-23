class Mascota {
  private nombre: string;
  constructor(nombre_mascota: string) {
    this.nombre = nombre_mascota;
  }

  obtenerNombre(): string {
    return this.nombre;
  }

  static consulta(): number {
    return 30;
  }
}

let perro = new Mascota('Totoro Zorro');
// perro es un objeto de la clase Mascota
console.log(perro);
// Mascota{nombre:zorro};
console.log(perro.obtenerNombre());
console.log('costo de la consulta: ' + Mascota.consulta());
