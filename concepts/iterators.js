// Hight Order Functions
// Funciones de Orden Superior
// Son funciones que reciben funciones como parametros

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// const operation = (a, b, callback) => {
//     const result = callback(a, b);
//     console.log('El resultado es: ' + result);
// }
// operation(12, 5, suma);
// operation(12, 5, resta);
// operation(12, 5, (a, b) => a * b)

// const cars = ['Vocho', 'Athos', 'Pointer', 'Tsuru', 'BMW'];
// cars.forEach((car) => {console.log(car)});

// cars.filter(car => car === 'Tsuru');
// const filtrados = cars.filter(car => car === 'Tsuru');
// console.log(filtrados);
// filtrados = cars.filter(car => car.includes('o'));
// console.log(filtrados);

// Regresar los que comienzen con a
// Regresar los que terminen con u
// Regresar los que tengan menos de 5 letras

// const emp = cars.filter(car => car.startsWith('A'));
// console.log(emp);

// const term = cars.filter(car => car.endsWith('u'))
// console.log(term);

// const menos = cars.filter(car => car.length < 5);
// console.log(menos);

// const CARS = cars.map(car => car.toUpperCase());
// console.log(cars);
// console.log(CARS);

// const REV = cars.map(car => car.split('').reverse().join(''));
// console.log(REV);

// function wrapping(gifts) {
//     return gifts.map(gift => {
//         let tapa = '*'.repeat(gift.length + 1);
//         let g = `${tapa}\n*${gift}*\n${tapa}`;
//         return g;
//     })
// }
// const carsEnvueltos = wrapping(cars);
// carsEnvueltos.forEach(car => console.log(car));

// forEach, map, filter
// reduce 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sumatoria = numbers.reduce((a, b) => a * b);
// console.log(numbers);
// console.log(sumatoria);
// const factorial = numbers.reduce((a, b) => a * b);
// console.log(factorial);

// Every and Some

// const ages = [23, 14, 37, 10, 18, 22, 27];
// const olders = ages.every(age => age >= 18);
// const youngers = ages.every(age => age < 18);
// console.log(olders);
// console.log(youngers);

// const olders2 = ages.some(age => age >= 18);
// const youngers2 = ages.some(age => age < 18);
// console.log(olders2);
// console.log(youngers2);

// Ejecicios
/*
* Crear una Array con los elementos del 1 al 10
* Crear uno nuevo con los Cuadrados
* Crear uno nuevo con los cubos
* Crear uno nuevo con las mitades
*
* Crear uno nuevo con los pares
* Crear uno nuevo con los impares
* Crear uno nuevo con los valores 2 y 8
*/

let array = Array.from({length: 10}, (v, i) => i + 1);
console.log(array);

let cuadrado = array.map(num => num ** 2);
console.log(cuadrado);

let cubo = array.map(num => num ** 3);
console.log(cubo);

let mitades = array.map(num => num / 2);
console.log(mitades);

let pares = array.filter(num => num % 2 === 0);
console.log(pares);

let impares = array.filter(num => num % 3 !== 0);
console.log(impares);

let valores = array.filter(num => num === 2 || num === 8);
console.log(valores);

const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10];
const squa = numbers.map(n => n ** 2);

const pairs = numbers.filter(n => n % 2 !== 0);