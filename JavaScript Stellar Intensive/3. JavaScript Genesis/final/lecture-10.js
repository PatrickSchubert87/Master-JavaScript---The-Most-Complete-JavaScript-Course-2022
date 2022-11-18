//JAVASCRIPT SCOPE

/*
1) GLOBAL
2) LOCAL
*/
//GLOBAL VAR 
var firstName = 'Rick';
console.log(firstName);

//EACH FUNCTION JS HAS ITS OWN SCOPE
function first(){
   // console.log(firstName);
   //LOCAL
   var lastName = 'Sekuloski';
   console.log(lastName);
}
//INVOKE
first();

//EVERY LOCAL VARIABLE CANNOT BE ACCESSED OUTSIDE THE FN: Uncaught ReferenceError: lastName is not defined
//console.log(lastName);

//AUTOMATICALLY GLOBAL

secondFun();

function secondFun(){
    carName = 'Toyota';
};
console.log(carName);