//PASS BY REFERENCE AND PASS BY VALUE

/* spred operator reading 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/

//PRIMITIVE & NON-PRIMITIVE
///1) PRIMITIVE : PASS BY VALUE
let num1 = 4;
//let num2 = 4;
let num2 = num1;

num1++;
num2--;

console.log(num1);
console.log(num2);
//2) NON-PRIMITIVE: PASS BY REFERENCE
let obj1 = {
    name: 'Rick',
    student: true
};
let obj2 = obj1;

// obj2.name = 'Gary';
// obj2.student = false;
obj1.name = 'Gary M';
obj1.student = false;

//CREATE NEW OBJECT BY CLONING
let newObj = Object.assign({},obj1);
newObj.name = 'Andy';
newObj.student= true;
//CREATE NEW OBJECT USING SPREAD OPERATOR
const newSpredObj = {...obj1};
newSpredObj.student = true;
newSpredObj.name = 'Tom';

console.log('object 1',obj1);
console.log('object 2',obj2);
console.log('cloned newObj', newObj);
console.log('spread obj', newSpredObj);

//OBJECT WITHIN AN OBJECT
let doubleObj = {
    student:{
        firstName: 'Rick',
        lastName: 'Sekuloski'
    },
    stundentId:123456,
    status: true
}
//1)CLONE IT USING SPREAD
let anotherClone = {...doubleObj};
//2)MODIFY THE LAST NAME OF CLONED OBJ
anotherClone.student.lastName ='Garcia';
//2)MODIFY THE LAST NAME OF CLONED OBJ
anotherClone.status =false;


console.log('double obj',doubleObj);
console.log('another cloned obj',anotherClone);
//ARRAYS ARE OBJ pass by reference
let secondArr = [];
let firstArr = [1,2,3,4,5,6];
//let secondArr = firstArr;
secondArr = secondArr.concat(firstArr);
secondArr.push(7);
//SPREAD ON ARRAYS
let newArray = [1,2,3,4,5];
let emptyArray = [...newArray];
emptyArray.push(6);
emptyArray.push(7);


console.log('first array', firstArr);
console.log('second array', secondArr);
console.log('new array', newArray);
console.log('spread operator array', emptyArray);



//SPREAD OPERATOR FUNCTION EXAMPLE
// function sum(x, y, z) {
//     return x + y + z;
//   }
  
//   const numbers = [1, 2, 3];
  
//   //without spred
//   console.log('sum:', sum(numbers[0], numbers[1], numbers[2]));
// //with spread operator

// console.log('using spred sum:', sum(...numbers));
  