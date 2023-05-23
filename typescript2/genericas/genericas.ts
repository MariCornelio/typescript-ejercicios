// function retornar_numero(valor: number): number{
//   return valor;
// }
// function retornar_string(valor: string): string{
//   return valor;
// }
// función genérica
function retornar_valor<T>(valor: T): T {
  return valor;
}

console.log(retornar_valor('Mari'));
console.log(retornar_valor(179.555).toFixed(2));
