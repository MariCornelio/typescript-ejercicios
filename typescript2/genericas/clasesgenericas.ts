class PilaNumeros {
  private vector: number[] = [];
  apilar(x: number) {
    this.vector.push(x);
  }
  retirar() {
    if (this.vector.length > 0) {
      return this.vector.pop();
    } else {
      return null;
    }
  }
}
class Pilastring {
  private vector: string[] = [];
  apilar(x: string) {
    this.vector.push(x);
  }
  retirar() {
    if (this.vector.length > 0) {
      return this.vector.pop();
    } else {
      return null;
    }
  }
}
let pila1 = new PilaNumeros();
pila1.apilar(40);
pila1.apilar(20);
pila1.apilar(1);
console.log(pila1.retirar());

let pila2 = new Pilastring();
pila2.apilar('h');
pila2.apilar('k');
pila2.apilar('i');
console.log(pila2.retirar());

class PilaGenerica<T> {
  private vector: T[] = [];
  apilar(x: T) {
    this.vector.push(x);
  }
  retirar() {
    if (this.vector.length > 0) {
      return this.vector.pop();
    } else {
      return null;
    }
  }
}

let pila3: PilaGenerica<number>;
pila3 = new PilaGenerica<number>();
pila3.apilar(20);
pila3.apilar(50);
pila3.apilar(60);
pila3.apilar(70);
console.log(pila3.retirar());

let pila4: PilaGenerica<string>;
pila4 = new PilaGenerica<string>();
pila4.apilar('o');
pila4.apilar('t');
pila4.apilar('r');
console.log(pila4.retirar());
