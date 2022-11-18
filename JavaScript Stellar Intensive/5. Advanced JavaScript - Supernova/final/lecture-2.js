//ES6 ADVANCED FUNCTIONS

//1) LEXICAL SCOPING
function init() {
    const name = 'RICK'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

//LETS CONVERT THIS NESTED FUNCTION INTO ES6 ARROW FUNCTIONS
// function makeFunc(){
//     var message = 'Howdy'
//     function displayName(){
//         console.log(message);
//     }
//     return displayName;
// }

// var myFunc = makeFunc();
// myFunc();

//2) CLOSURES
//CONVERT TO ES6 SYNTAX
const makeFunc = () =>{
    const message = 'Howdy';
    const displayName = () =>{
        console.log(message);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc();
/* 
So the displayName() inner function is returned from the outer function before being executed.
At first glance, it might seem unintuitive that this code still works. 
In some programming languages, the local variables within a function exist for just the duration
of that function's execution. 
Once makeFunc() finishes executing, you might expect that the message variable would no longer be accessible. 
However, because the code still works as expected, this is obviously not the case in JavaScript.
This is happening because of JavaScript closures. A closure is the combination of a function and 
the lexical environment within which that function was declared. 
This environment consists of any local variables that were in-scope at the time the closure was created.
So myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. 
The instance of displayName maintains a reference to its lexical environment, within which 
the variable message exists.
For this reason, when myFunc is invoked, the variable message remains available for use,
and "Howdy" is passed to the console.

 */
//currying

const sum = (a, b) => a + b;
const curryingSum = (a) => (b) => a + b;
console.log(curryingSum(4)(5));

const sumEven4 = curryingSum(4);
//console.log(sumEven4);
console.log(sumEven4(4));
console.log(sumEven4(8));
console.log(sumEven4(10));

//COMPOSE FUNCTION
const composeFn = (a, b) => (c) => a(b(c));

const a = (num) => num * 2;
const b = (num) => num * 3;
const c = (num) => num;
let result = composeFn(a,b)(3);
console.log(result);
//RESULT: composeFn(a,b)(3);
//1) composeFn = (a, b) => (c) => a(b(3));
// c = (3) => 3; will return 3;
// c = 3
//2) b = (3) => 3* 3 which is 9;
//3) a = (9) => 9 * 2 which is 18;
//console.log(result)

