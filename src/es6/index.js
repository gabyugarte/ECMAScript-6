// objetos

class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    // método
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
//  MODULOS
const calc = new Calculator();
console.log(calc.sum(2, 2));

import { hello } from './module';

hello();

// GENERATORS, importante cuando trabajamos con lógicas, funcion* fibonacci()
// funcion especial con asterisco para asignar el generator
function* helloWorld(){
    // valor yield que me permite retornar algo
    if(true) {
        yield 'Hello,';
    }
    if (true) {
        yield 'World!';
    }
};

// ejecutamos
const generatorHello = helloWorld();
// valor next que nos permite ejecutar la 1r logica
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){  
      var actual = fn2;
      fn2 = fn1;
      fn1 = fn1 + actual;
      var reset = yield actual;
      if (reset){
          fn1 = 1;
          fn2 = 1;
      }
    }
  }
  
  var secuencia = fibonacci();
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next(true).value); // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);  