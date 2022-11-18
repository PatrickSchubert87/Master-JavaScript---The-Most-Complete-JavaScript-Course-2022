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
 var first = 'First';
 var second = 'Second';
 var third = 'Third';
 //ASSIGN NEW VALUE TO SECOND
 second = '2nd';


 //2) USE DESTRUCTURING
var personObj = {
    firstName : 'Your Name',
    lastName : 'Your Last Name',
    age : 30,
    student : true,
    height : 1.7
}
//REPLACE ALL OF THIS USING DESTRUCTING AND PRINT THEM
var firstName = personObj.firstName;
var lastName = personObj.lastName;
var age = personObj.age;
var student = personObj.student;
var height = personObj.height;

//3) TEMPLATE LITERALS
//REPLACE THE FOLLOWING STRING
var details = 'Hi there my name is: '+ firstName + ' and my last name is ' + lastName + '. I\'m ' + age + ' years old, \n and my student status is: ' + student + '. Also my height is: '+ height + ' meters.';

//4) USE ARROW FN

function thisCourse(studentName, difficulty){
    if(studentName && difficulty){
        return studentName + " is still taking this course so its " + difficulty +" for me.";
    }
    else{
        return "This student is not taking this course so its very difficult for him/her.";
    }
}
thisCourse('Rick', 'Easy');
//NOW CHANGE THIS USING DEFAULT ARGUMENTS

//5) Change thisCourse function into ARROW FN

