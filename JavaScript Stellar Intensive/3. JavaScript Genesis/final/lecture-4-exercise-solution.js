//EXCLAIMER:
/*Imagine you are going to a bar and want to get yourself
a drink.
The bartender will ask you prof of your age
Now can you make the card based on a prompt asking your credentials,
and doing this will prove you are over 18
*/

//1) Prompt the User for Their Name
//2) Ask: How old are you 'her/his name'?
//3) If user is less than 18 alert this message
// Sorry, I can't serve you a drink because you are minor! Security!!
//4) If the user is over 18 then alert this message
//5) Sure what you want to drink, alcohol or non alcohol drink? 
//Type YES for Alcohol and NO for non alcohol drink? 
//6)If the answer is YES  then another prompt saying
// Here is your whisky!
// Or if the answer is No another alert saying
// Here is your orange juice!


var name = prompt('What is your name?');
var age = prompt('How old are you '+ name +'?');
if(age < 18){
    alert('Sorry, I can\'t serve you a drink because you are minor. Security!!');
}
else{
    var drink= prompt('Sure what you want to drink? Alcohol or non alcohol drink? Type Yes or No');
    if(drink ==='YES'){
        alert('Here is your whisky!');
    }
    else{
        alert('Here is your orange juice!');
    }
}


