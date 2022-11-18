//ES6 ECMAScript
/*
MAKE MODIFICATIONS SO THE OLD ES5 SYNTAX SO IT CAN BE REPLACED WITH NEW
 ES6 FEATURES.
 You can test all of this using the browser or use 
 console.log
 
 Solutions are in lecture-1-exercise-solutions.js
 Make sure if you want to test it in the browser 
 change the index.html script into
 <script src="./lecture-1-exercise-solutions.js"></script>

 Do this for all of the exercises
 */

 //1) USE LET & CONST
 const first = 'First';
 let second = 'Second';//try using const here instead of let
 const third = 'Third';
 //ASSIGN NEW VALUE TO SECOND
 second = '2nd';
 console.log(`1 - ${second}`);


 //2) USE DESTRUCTURING
var personObj = {
    firstName : 'Your Name',
    lastName : 'Your Last Name',
    age : 30,
    student : true,
    height : 1.7
}
//REPLACE ALL OF THIS USING DESTRUCTING AND PRINT THEM
const {firstName,lastName} = personObj;
let {age, student, height} = personObj;

console.log(`2 :
First Name: ${firstName}, 
Last Name: ${lastName},
Age: ${age},
Student: ${student},
Height: ${height}`);

//3) TEMPLATE LITERALS
//REPLACE THE FOLLOWING STRING
let details = `Hi there my name is: ${firstName} and my last name is ${lastName}.I'm ${age} years old
and my student status is: ${student}. Also my height is ${height} meters.`;

console.log(`3 - ${details}`);
//4) USE ARROW FN
function thisCourse(studentName='Rick', difficulty='easy'){
    if(studentName && difficulty){
        return studentName + " is still taking this course so its " + difficulty +" for me.";
    }
    else{
        return "This student is not taking this course so its very difficult for him/her.";
    }
}
let status = thisCourse();
console.log(`4 - ${status}`);
//5) Change thisCourse function into ARROW FN and change the name of the function
//to thisCourse1 so you can compare them both
const thisCourse1 = (studentName, difficulty) =>{
    if(studentName && difficulty){
        return studentName + " is still taking this course so its " + difficulty +" for me.";
    }
    else{
        return "This student is not taking this course so its very difficult for him/her.";
    }
}

let fnResult = thisCourse1('Andy','Easy');
console.log(`5 - ${fnResult}`);
//just to test what happens if one argument in the function thisCourse1 is missing
 fnResult = thisCourse1('Andy');
console.log(`6 - ${fnResult}`);