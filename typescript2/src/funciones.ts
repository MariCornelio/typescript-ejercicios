// ejemplo1
let articulo: string = 'televisor';

function mostrar_producto(): string {
  return articulo;
}
console.log(mostrar_producto());

// ejemplo2
let descuento = function (): boolean {
  return true;
};

// ejemplo3 parametros obligatorios deben ser utilizados
function detalleproducto(modelo: string, tamanio: number): string {
  return `${modelo} - ${tamanio} Pulgadas`;
}
console.log(detalleproducto('LG', 50));

// parametros opcionales
function Envios(direccion: string, costo?: number): string {
  if (costo) {
    return `${direccion} Costo:${costo} soles `;
  } else {
    return direccion;
  }
}
console.log(Envios('villa el salvador'));

// parametros por defecto
function cliente(
  nombre: string,
  apellido: string,
  mayuscula: boolean = true
): string {
  if (mayuscula) {
    return mayusculas(nombre) + ' ' + mayusculas(apellido);
  } else {
    return `${nombre} ${apellido}`;
  }
}
function mayusculas(texto: string): string {
  return texto.toUpperCase();
}

console.log(cliente('mari', 'cornelio', false));
// por defecto
console.log(cliente('mari', 'cornelio'));

// Parametros de tipo REST

function DetalleCompleto(marca: string, ...otrosParametros: string[]): string {
  return marca + ' ' + otrosParametros.join(' ');
}

console.log(DetalleCompleto('Addidas'));
console.log(DetalleCompleto('Addidas', 'x', 'y'));

// definir reglas en una función

function sumar(a: number, b: number): number {
  return a + b;
}
function tuNombre(nombre: string): string {
  return nombre;
}
function saludo2(): void {
  console.log('Hola, soy mari');
}
let miFuncion: (a: number, b: number) => number;

miFuncion = sumar;
console.log(miFuncion(2, 5));

// miFuncion = tuNombre;
// console.log(miFuncion('katy'));

// miFuncion = saludo;
// miFuncion();
