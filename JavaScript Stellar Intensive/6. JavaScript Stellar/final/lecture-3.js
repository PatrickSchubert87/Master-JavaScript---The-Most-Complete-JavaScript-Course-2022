/*Callbacks, Async (Asynchronous) JavaScript,Callback Hell, Pyramid of Doom

CallBacks DEF:
"I will call back later!"
- A callback is a function passed as an argument to another function
- This technique allows a function to call another function
- A callback function can run after another function has finished
*/

//FUNCTION SEQUENCE
// function firstFunction(){
//     console.log('Hello');
// }
// function secondFunction(){
//     console.log('Bye, Bye');
// }

// firstFunction();
// secondFunction();
// secondFunction();
// firstFunction();

//SEQUENCE CONTROL

// function message(result){
//     console.log(`The sum is : ${result}`);
// }
// function sum(a, b){
//     let sum = a + b;
//     message(sum);
// }

// sum(5,6);


//callbacks

// function message(result){
//     console.log(`Callback sum is : ${result}`);
// }
// function sum(a, b, callBack){
//     let sum = a + b;
//     callBack(sum);
// }

// sum(5,6, message);
// wrong - sum(5,6, message);

//setTimeOut()

// function message(){
//     console.log(`This text will be seen after 3 seconds`);
// }
// setTimeout(message, 3000);

//ANONYMOUS FUNCTION

// setTimeout(function(){
//     console.log(`This text will be seen after 3 seconds`);
// }, 3000);

//CALLBACK AS AN ARROW FUN
// setTimeout(() => {
//     console.log(`This text will be seen after 3 seconds`);
// }, 3000);

const first = ()=>{
    console.log('The first function was called');
    second();
    console.log('The code did not stopped on the second function and still runs');
    third();
}

const second = ()=>{
    setTimeout(downloadComplete, 6000);//callback fn
}
const third = () =>{
    console.log('Third function was called');
}

const downloadComplete = ()=>{
    console.log(`The second function took 6 seconds 
    to complete the file because the file was big
    for downloading`);
}

first();