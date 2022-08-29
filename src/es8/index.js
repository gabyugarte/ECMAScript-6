// Object.entries, Transforma un objeto en array----------------------------------------------------------------

const data = {
    frontend: 'Gaby',
    backend: 'Isabelle',
    design: 'Ana',
}

// tranformar este objeto a una matriz o array

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object.values, me devuelve los valores de un objeto a un arreglo--------------------------
const data2 = {
    frontend: 'Gaby',
    backend: 'Isabelle',
    design: 'Ana',
}

const values = Object.values(data2); 
console.log(values);
console.log(values.length);

// Padding----------------------------------------------------------------
// como agregamos una cadena vacía o lementos a este string
const string = 'hello';
console.log(string.padStart(7, 'hi'));
// los dos parámetros de padStart -> cuantos caracteres voy a tener? maxlenght (7) y cuales son esos caracteres?('hi')

console.log(string.padEnd(12,'---------'));
console.log('food' .padEnd(12, '---------'));

// --------Object.keys si que es importante para aplicar logica sobre las llaves de los objetos
const data3 = {
    frontend: 'Juan',
    backend: 'Carlos',
    design: 'Ana'
}
const entries3 = Object.entries(data3)
const key = Object.keys(data3)
const values3 = Object.values(data3)
console.log(entries3)
console.log(key)
console.log(values3);
