//EXCLAIMER:
/*Imagine you are going to a bar and want to get yourself
a drink.
The bartender will ask you prof of your age
Now can you make the card based on a prompt asking your credentials,
and doing this will prove you are over 18
*/

//1) Prompt the User for Their Name
const name = prompt("What's your name?");
//2) Ask: How old are you 'her/his name'?
const age = prompt(`How old are you, ${name}?`);
//3) If user is less than 18 alert this message
if(age < 18) {
alert("Sorry, I can't serve you a drink because you are minor! Security!!"); 
}
//4) If the user is over 18 then alert this message
else {
//5) 
alert(`Sure what you want to drink, alcohol or non alcohol drink?`);
//Type YES for Alcohol and NO for non alcohol drink? 
const answer = prompt('Type YES for Alcohol and NO for non alcohol drink?');
//6)If the answer is yes then another prompt saying
if(answer === 'yes' || answer === 'Yes' || answer === 'YES' || answer === 'alcohol') {
alert('Here is your whisky!');
}
// Or if the answer is No another alert saying
else {
alert('Here is your orange juice!');
}
}
