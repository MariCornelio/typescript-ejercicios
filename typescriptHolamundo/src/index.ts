// console.log("hola mundo");
let mensaje: string = 'Hola mundo';
mensaje = 'No presenta errores';

mensaje = 'Adios mundo cruel :)';
console.log(mensaje);

// tipos de typescript

let extincioDinosaurios: number = 76_000_000;
let dinosauriofavorito: string = 'T-Rex';
let extintos = true;
// extintos = 42;
// let mivariable;--> es de tipo any y este quita el proposito de typescript

// tipado inferido se puede hacer en typescript
let mivariable;
mivariable = 'Gatocon botas';
mivariable = 42;

// FUNCIONES
function perrito(config: any) {
  return config;
}

// Array
let animales: string[] = ['hola', 'cdt', 'felipe'];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

// nums.map(x=>x.) el autocompletado sugiere metodos del tipo de dato

// TUPLAS
// es una variable es una set de datos que se encuentran ordenados

// 1,edad,name, animales[]

let tupla: [number, string, string[]] = [1, 'zorro', ['hola', 'chau']];

// Enums
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';

// el lo va a traspilar en IFEE-> inmediated invoked function expression --> la vamos a ejecutar inmeditamente
enum Talla {
  Chica = 's',
  Medina = 'm',
  Grande = 'l',
  ExtraGrande = 'xl',
}

const variable1 = Talla.Grande;
console.log(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}
const estado = LoadingState.Success;

// OBJETOS
// const objeto: {
//   id: number,
//   nombre?:string,
// } = { id: 1};
type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};
type Persona = {
  readonly id: number;
  nombre: string;
  talla: Talla;
  direccion: Direccion;
};
const objeto: Persona = {
  id: 1,
  nombre: 'hola mundo',
  talla: Talla.Chica,
  direccion: {
    numero: 1,
    calle: 'sprinfield',
    pais: 'Perú',
  },
};
//va ser un array de objetos que son persona
const arr: Persona[] = [
  {
    id: 2,
    nombre: 'lulu',
    talla: Talla.ExtraGrande,
    direccion: {
      numero: 46,
      calle: 'multiverso',
      pais: 'las maravillas',
    },
  },
  {
    id: 5,
    nombre: 'lulu',
    talla: Talla.ExtraGrande,
    direccion: {
      numero: 46,
      calle: 'multiverso',
      pais: 'las maravillas',
    },
  },
];
