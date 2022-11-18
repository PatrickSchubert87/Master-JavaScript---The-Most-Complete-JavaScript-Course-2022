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

//1) The result is Tom


//2
var lastName = 'Sekuloski';
function second(){
    lastName = 'Cruise';
}

function third(){
    console.log(lastName);
}
// A) RUN THIRD();  guess the output? Sekuloski
// B) RUN SECOND(); guess the output? undefined
// C) RUN THIRD();  guess the output? Cruise

//3)

function fourth(){
    firstName = 'Jason';
}


//RUN THE FOURTH FUNCTION
//CONSOLE.LOG THE FIRSTNAME. WHAT IS THE OUTPUT? JASON
//WHY IS THIS? -- All of the not declared variables automatically becomes global ones

//4) DO WE HAVE GLOBAL VARIABLES ? YES ALL OF THE FUNCTIONS HERE ARE TREATED AS VARIABLES
//AND THE FIRSTNAME BECOMES GLOBAL AUTOMATICALLY BECAUSE ITS NOT BEING DECLARED.
//LASTNAME IS GLOBAL AS WELL
//
//5) WHAT ARE THE LOCAL VARIABLES? VARIABLE MYNANE
