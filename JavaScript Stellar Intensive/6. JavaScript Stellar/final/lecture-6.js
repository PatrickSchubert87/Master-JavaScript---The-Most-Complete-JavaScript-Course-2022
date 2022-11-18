/* ES8 - ECMAScript 2017 

TWO STRINGS METHODS
1) padStart() for adding padding to the strings before
2) padEnd() for adding padding to the strings after

3) Trailing commas in function parameter lists and calls
4) Object.values
5) Object.entries
Object.keys /already included /

*/

//1)padStart() to add padding to the left of the string
let firstName = 'Andy';
console.log(firstName);
console.log(firstName.padStart(15));//15 - 4 = 11
//2)padEnd() to add padding to the right of the string
console.log(firstName.padEnd(10)+'.');//15 - 4 = 11

//3 Trailing commas in function parameter lists and calls
// const commaFn = (a,b,c,d,) =>{
//     console.log(a,b);
// }
const commaFn = (
    a,
    b,
    c,
    d,
    ) =>{
    console.log(a,b);
}
commaFn(1,2,3,4);
/*
from:
[
'foo'
]
to
[
'foo',
'bar'
]

*/
 
// Object.keys

let userObj = {
    user1: 'Tom',
    user2: 'Andy',
    user3: 'Sara',
    user4: 'Angelina'
}
console.log(userObj);
//Object.keys is used when we want to loop through
// obj as they are arrays
Object.keys(userObj).forEach((key)=>{
    console.log('key: ', key, ' value: ',userObj[key]);
});

//4) Object.entries  this will give us an array back
//of user object key value pairs
Object.entries(userObj).forEach(entry =>{
    console.log(entry);
})
//5) Object.values
//will give back the values of the object properties/keys
Object.values(userObj).forEach(value => console.log(value));