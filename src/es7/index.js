// vamos a poder usar el método includes para saber si hay un valor dentro de unh string o arreglo
// anteriormente usabamos indexof, pero ahora es más amigable

let numbers = [1,2,3,7,8];
const value = 9;
if (numbers.includes(value)){
    console.log(`Si se encuentra el valor ${value}`);
}else{
    console.log(`No se encuentrael valor ${value}`);
}

// Cómo elebamos a la potencia

let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);