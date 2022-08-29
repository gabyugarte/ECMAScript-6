let array = [1, 2, 3, [1, 2, 3, [1, 2, 3,]]];
// array.flat, nos devuelve una matriz con cualquier submatriz aplanada, y nos ayuda a entender como esta estructurada
// flat recibe como argumento la profundidad
console.log(array.flat(2))

// flatMap -> permite mapear cada elemento , depues pasarle una funcion y aplanarlo

let array2 = [1, 2, 3, 4, 5];
console.log (array2.flatMap(value => [value, value * 2]));

//. trimStart() ->Nos permite eliminar los espacios en blanco al inicio de un string
// . trimEnd() -> Nos permite eliminar los espacios en blanco al final de un string
let hello = '   hello world!';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello World     ';
console.log(hello2);
console.log(hello2.trimEnd());

// try / catch podemos pasar de forma opcional el parametro de error
// ya no se pone como parámetro el (error)
try {

}catch{
    error
}

// (Object.fromEntries(entries)) -> transforma los valores de arreglos a objetos
// (Object.entries(object)) -> transforma objetos a arrays
let entries = [["name", "Gaby"], ["age", 37]];
console.log(Object.fromEntries(entries)); 
let object = { name: 'Gaby', age: 37 }
console.log(Object.entries(object));

// Symbol() objeto de tipo simbolo que nos permite acceder a una descripción

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);