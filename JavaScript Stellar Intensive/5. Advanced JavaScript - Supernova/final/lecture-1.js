//ES6 FEATURES

//1) LET & CONST
// var firstName = 'Rick';
// console.log(firstName);
const firstName = 'Rick';//doesn't allow us
//to do mutations
let age = 30;//allows us to modify the value

if(age >= 30){
    let age = 33;
    console.log(age);
}
console.log(age);
//firstName = 'Andy';
console.log(firstName);

const personObj = {
    personName: 'Rick',
    personAge: 30,
    developer: true
}
//personObj = 'Rick'; //we cannot assign new value
personObj.personAge = 31;
personObj.developer = false;
console.log(personObj);

//2)DESTRUCTORING
// const personName = personObj.personName;
// const personAge = personObj.personAge;
// const isDeveloper = personObj.developer;
// console.log('Name: ' + personName +', age: '+ personAge + ', is devloper: '+ isDeveloper);

const {personName} = personObj;
console.log(personName);
let {personAge, developer} = personObj;

console.log(personAge, developer);

//ES6 NEW FEATRUE
const student = 'Andy';
const studentId = '12345454';
let isStudent = true;

const studentObj = {
    // student: student,
    // studentId: studentId,
    // isStudent: isStudent
    student,
    studentId,
    isStudent
}
console.log(studentObj);

//3)TEMPLATE LITERALS
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
const studentGreeting  = 'My name is ' + student + ' and my student id is: ' + studentId + '\n' +' and i still study '+ isStudent;
const studentGreeting1 = `My name is ${student} and my student id is: ${studentId}
and I still study ${isStudent}`;
console.log(studentGreeting);
console.log(studentGreeting1);
let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

//4)DEFAULT ARGUMENTS

function calculate(x=1, y=1, z=1){
    let result = x + y + z;
    console.log(`The values of x, y, z are: ${x}, ${y}, ${z} respectively`);
    return result;
}
//calculate();
let sum = calculate(3, 5, 8);
console.log(sum);

//5)JAVASCRIPT TYPE CALLED SYMBOL
let symbol1 = Symbol();
let symbol2 = Symbol();
let symbol3 = Symbol();
if(symbol1 === symbol2){
    console.log('They are the same!');
}
else{
    console.log('Nope they are not!');
}
//6)ARROW FUNCTIONS

function sum1(m,n){
    return m + n;
}

// const arrFn = (m,n) => {
//     return m + n;
// }
const arrFn = (m,n) => m + n;

let res = arrFn(5,2);
let sumResult = sum1(5,2);
console.log('Arrow Function '+ res);
console.log('Sum Function: '+ sumResult);
