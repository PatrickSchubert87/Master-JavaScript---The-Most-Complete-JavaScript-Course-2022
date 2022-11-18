/*
WELCOME TO:
ECMAScript 2016 or ES7

1. includes method
2. exponential operator
*/

//INCLUDES METHOD ON ARRAY
const cars = ['BMW','FORD', 'AUDI','PORSCHE', 'MERCEDES'];
console.log(cars.includes('CHEVROLET'));//FALSE
console.log(cars.includes('AUDI'));//TRUE
console.log(cars.includes('ford'));//FALSE


console.log('///////////////////');
//INCLUDES METHOD ON STRINGS
const fullName = 'Jack Reacher';

console.log(fullName.includes('a'));//true
console.log(fullName.includes('E'));//false
console.log(fullName.includes('ac'));//true
console.log(fullName.includes('Jack'));//true
console.log(fullName.includes(' '));//true


//EXPONENTIAL OPERATOR
const calcSquare = (x) => x**2;
let res = calcSquare(4);
//res = calcSquare(6);

const calcCube = (x) => x**3;
res = calcCube(5);
console.log(res);


