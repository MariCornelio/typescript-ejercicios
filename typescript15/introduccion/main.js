// definir una variable se hace con let , te permite crerd variables en ambitos
var texto = 'Mari cornelio';
var numero = 12;
var verdadero = true;
var cualquier = 'puedo meter lo que sea';
// el let puede volverse a definir pero siempre y cuando estén en el mismo typo como fue definido
verdadero = false;
// igual que en javascript se puede definir variables con const
var nombre = 'tito';
console.log(texto, numero, verdadero);
// arrays
// personas va contener un array de strings
// let personas:Array<string>=
var personas = ['lulu', 'mari', 'moni'];
// podemos usar el foreach o el map
// puedo usar una función anonima con arrow function
var $divPersonas = document.querySelector('#personas');
$divPersonas.innerHTML = '<ul>';
personas.map(function (persona) {
    $divPersonas.innerHTML += "<li>".concat(persona, "</li>");
});
$divPersonas.innerHTML += '</ul>';
