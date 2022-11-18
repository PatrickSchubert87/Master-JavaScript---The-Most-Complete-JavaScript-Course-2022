/* ES10
WELCOME TO ES10 OR ECMAScript 2019


1) flat()
2) flatMap()
3) trimStrat()
4) trimEnd()
5) fromEntries transforms an aray of key value pairs to an obj
6) try and catch block
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
*/

//1) flat 
const arr1 = [1,2,3,4,5,6];
const arr2 = [1,2,3,4,[5,6],7,[8,[10,11]]];
console.log(arr1.flat());
console.log(arr2.flat());//
console.log(arr2.flat(2));//depth 2

//2) flatMap

const numbers = [-1,1,-2,2,-3,3,-4,4-5,5];
console.log('numbers',numbers);

const positiveNum = numbers.flatMap(number => {
    return number < 0 ? []: [number];
});
console.log(positiveNum);

//trimStart && trimEnd these on strings

let firstName = '       Samuel';
let lastName = 'Jackson      ';

console.log(`My full name is ${firstName} ${lastName}.`);
firstName = firstName.trimStart();
lastName = lastName.trimEnd();
console.log(`My full name is ${firstName} ${lastName}.`);

//from entries
const userNames = [
    ['Rick','Australia'],
    ['Tom','USA'],
    ['Edwin','Brazil'],
    ['Jason', 'New Zealand']
];

console.log('User names', userNames);
const userNamesObj = Object.fromEntries(userNames);
console.log(userNamesObj);


//BEFORE ES10
try{
    throw Error;
    console.log('Try block will be executed');
}
catch(err){
    console.log('Error happened',err);
}

//IN ES10 TRY AND CATCH WITHOUT ERROR PARAMETER
try{
    throw Error;
    console.log('Try block will be executed');
}
catch{
    console.log('Error happened and its working');
}