//JAVASCRIPT TERMINOLOGY

//DECLARE A FN
function firstFn(){

}

//FUNCTION ARGUMENTS
function secondFn(name,age){

}

//CALL OR INVOKE THE FN

secondFn('Rick',23);

//BODY OF THE FUNCTION
function thirdFn(name,age){
    console.log(name + ' is '+ age + ' years old');
}
thirdFn('Andy',29);

//FUNCTION EXPRESSION
var fnExp = function(){
    return 'Sam';
};

//CALL OR INVOKE fn ex
var name = fnExp();
console.log(name);

//ASSIGN A DATA TO A VARIABLE
var firstName = 'John';

//METHODS ARE FUNCTIONS INSIDE AN OBJECT

var obj = {
    name: 'Rick',
    age: 33,
    yearBirth: function(){
        console.log('1987');
    }
}

//ACCESSING OBJECT METHODS
obj.yearBirth();

//ARRAY
var myArray = [];
var secondArray = ['Jimmy', 'Tommy'];
console.log(secondArray[0]);
console.log(secondArray[1]);
console.log(secondArray.length);
console.log(secondArray);




