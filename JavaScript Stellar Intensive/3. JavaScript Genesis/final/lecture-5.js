//JAVASCRIPT FUNCTION

//1) ALERT
//2) PROMPT 
//() call and execute
//(); end of an expression
// alert('Hi');

//DECLARE A FN
function myFirstFn(){
    console.log('hello from here');
}
//CALL THE FN
myFirstFn();

//ONE OR MORE ARGUMENTS/PARAMETERS

function argumentFn(firstArgument){
    console.log(firstArgument);
}
argumentFn('Hello');

function birthYear(year,age){
    var bYear = year - age;
    console.log(bYear);
}
birthYear(2022,23);

//FN EXPRESSION

var fnExpression = function(){
    console.log('This is comming from FN exrpression');
}
fnExpression();

//RETURN
function birthYear1(year,age){
    var bYear = year - age;
   return bYear;
}
// console.log(birthYear1(2022,23));
var birthYearResult = birthYear1(2023,23);
console.log(birthYearResult);
console.log(birthYearResult - 1);


function printDetails(firstName,lastName,year,age){
    console.log('My first name is '+ firstName + '\n');
    console.log('My last name is '+ lastName + '\n');
    console.log('Im born in '+ birthYear1(year,age) + '\n');
}

printDetails('Rick', 'Sekuloski', 2022,33);