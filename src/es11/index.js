// dinamic Import - se realiza una importacion de un elemento de forma dinámica pra llamar piezas de codigo para optimizar el proyecto.
 const button = document.getElementById('btn');

 button.addEventListener('click', async function (){
    const module = await import("./file.js");
    module.hello();
 });
//  2 maneras de representar números grandes
 const aBigNumber = 9007199254740991n;
 const anotherBigNumber = BigInt(9007199254740991);

 console.log(aBigNumber);
 console.log(anotherBigNumber);

// Promise.allSettled() Nos devuelve una promesa que se resuelve después que todas las promeas dadas se hayan cumplido o rehcazado
const promise1 = new Promise((resolve, reject) => reject ("reject"));
const promise2 = new Promise((resolve, reject) => resolve ("resolve"));
const promise3 = new Promise((resolve, reject) => resolve ("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
 .then(response => console.log(response));

//  global this, tiene en valor global de this, similar al objeto global this. 
// globalThis funciona en todas las plataformas
console.log(window);
console.log(globalThis);

// Operador de Nulo ?? (Nullish Coalescing), es un operador lógico que devuelve su operando del lado derecho cuando su operando del lado izquierdo es null o undefined, de lo contrario devuelve su operando del lado izquierdo.

const fooo = null ?? 'default string';
console.log(fooo);

false ?? 'foo' // false
undefined ?? 'foo' // 'foo'
null ?? 'foo' // 'foo'
NaN ?? 'foo' // NaN

// El siguiente ejemplo se lee como: ¿usuario.name es undefined o null? Si es así, asígnale un valor por defecto "Andres", caso contrario asigna el valor de usuario.name.
const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'

//⛓ Optional chaining, podemos trabajar diferentes niveles de los arreglos y abjetos

const user = [];
console.log(user?.profile?.email);

if(user?.profile?.email){
   console.log('email');
}else{
   console.log('fail');
}




