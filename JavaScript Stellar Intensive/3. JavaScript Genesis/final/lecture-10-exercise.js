//GLOBAL AND LOCAL SCOPE

//1)
//COPY THIS FUNCTION AND RUN IT IN THE BROWER CONSOLE
//BEFORE CALLING THIS FUNCTION LIKE THIS first().
//WHAT YOU THINK WILL BE THE RESULT? 
function first(){
    var myName = 'Rick';
    if(myName !== 'Tom'){
        myName = 'Tom';
    }
    console.log(myName);
}

//2
var lastName = 'Sekuloski';
function second(){
    lastName = 'Cruise';
}

function third(){
    console.log(lastName);
}
// A) RUN THIRD();  guess the output?
// B) RUN SECOND(); guess the output?
// C) RUN THIRD();  guess the output?

//3)

function fourth(){
    firstName = 'Jason';
}

//RUN THE FOURTH FUNCTION
//CONSOLE.LOG THE FIRSTNAME. WHAT IS THE OUTPUT?
//WHY IS THIS?

//4) DO WE HAVE GLOBAL VARIABLES ? 
//5) WHAT ARE THE LOCAL VARIABLES?