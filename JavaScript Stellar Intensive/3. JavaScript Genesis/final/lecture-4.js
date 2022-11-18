//JAVASCRIPT CONDITIONAL AND LOGICAL OPERATORS

/**
 *     JAVASCRIPT CONDITIONALS
 *              IF
 *              ELSE
 *              ELSE IF
 *              SWITCH
 *              TERNARY OPERATOR
 * 
 *     LOGICAL OPERATORS
 *              &&
 *              ||
 *              !
 
 */
var number1 = 18;
var number2 = 30;
var number3 = 16;

//IF CONDITION OR IF STATMENTS
if(number1 < number2){
    console.log('Number 2 is bigger than number 1');
}

//ELSE

if(number1 > number2){
    console.log('Number 2 is bigger than number 1');
}
else{
    console.log('This means that number 2 is bigger than number 1');
}

//ELSE IF

if(number1 > number2){
    console.log('Number 1 is bigger than number 2');
}
else if(number1 > number3){
    console.log('This means number 1 is bigger than number 3');
}
else{
    console.log('This means number 1 is the smallest of all');
}

//SWITCH

/*

switch(expression){
    case x:
        //code block
        break;
    case y:
        //code block
        break;
    default:
        //code block
        break;
}
*/

var day;
var today = new Date().getDay();

switch(today){

    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday"
        break;
    default:
        day = 'Something went wrong';
        break;

}

console.log(day);

//TERNARY OPERATOR

//condition ? expressionIFTrue : expressionIfFalse

var myAge = 26;
var beverage = (myAge >= 21) ? "Beer" : "Juice";
console.log(beverage);


//LOGICAL OPERATORS
//&& two of the conditions needs to be true in order to execute the if block

var firstName = 'Tom';
var lastName = 'Cruise';
if(firstName === 'Tom' && lastName ==='Cruise'){
    console.log('Wow we have a famous actor here doing a JavaScript classes');
}
else{
    console.log('Tom get back here and start working!');
}

//LOGICAL OPERATORS
//|| only one of the conditions needs to be true in order to execute the if block

if(firstName === 'Tomy' || lastName ==='Cruise'){
    console.log('Wow we have a famous actor here doing a JavaScript classes');
}
else{
    console.log('Tom get back here and start working!');
}

//LOGICAL OPERATORS
//! - not , will turn true conditions to false and false to true
var firstName = 'Tom';
if(!(firstName === 'Tom')){
    console.log('Hi Tom');
}
else{
    console.log('Who are you?');
}