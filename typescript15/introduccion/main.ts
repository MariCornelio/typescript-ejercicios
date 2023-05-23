// definir una variable se hace con let , te permite crerd variables en ambitos
let texto: string = 'Mari cornelio';
let numero: number = 12;
let verdadero: boolean = true;
let cualquier: any = 'puedo meter lo que sea';

// el let puede volverse a definir pero siempre y cuando estén en el mismo typo como fue definido
verdadero = false;

// igual que en javascript se puede definir variables con const
const nombre: string = 'tito';

console.log(texto, numero, verdadero);

// arrays
// personas va contener un array de strings
// let personas:Array<string>=
let personas: string[] = ['lulu', 'mari', 'moni'];

// podemos usar el foreach o el map
// puedo usar una función anonima con arrow function
let $divPersonas: HTMLElement | null = document.querySelector('#personas');
$divPersonas.innerHTML = '<ul>';
personas.map((persona) => {
  $divPersonas.innerHTML += `<li>${persona}</li>`;
});
$divPersonas.innerHTML += '</ul>';
