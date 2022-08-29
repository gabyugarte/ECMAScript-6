

//Antes, .replace solo cambia una sola palabra.
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."
const replaceString = string.replace("JavaScript", "Python");
console.log(replaceString);
// Python es maravilloso, con JavaScript puedo crear el futuro de la web.
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);
// Python es maravilloso, con Python puedo crear el futuro de la web.


// metodos privados que podemos usar dentro de las clases

class Message {
#Show(val) {
    console.log(val);
    };
}

const message = new Message();
message.Show('Hola');

// promise.any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

// Un objeto WeakRef consiste en mantener una referencia débil a otro objeto, para evitar que ese objeto sea eliminado por el Garbage Collection{target="_blank"}.
class anyClass{
    constructor(element){
    this.ref = new WeakRef(element);
}
{...}
}

// Nuevos operadores de asignación
// En ES2021 se agregaron tres operadores de asignación:


let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue ||= isFalse);

let isTrue2 = undefined;
let isFalse2 = false;
console.log(isTrue ??= isFalse);

// ejemplo
const person = {name:'Guada', nickname:''};

console.log(`Hola, ${person.nickname ||= person.name }`)

// Salida -> Hola, Guada


const person2 = {name:'Guada', nickname:'Guadita'};

console.log(`Hola, ${person.nickname ||= person.name }`)

//salida ->  Hola, Guadita



