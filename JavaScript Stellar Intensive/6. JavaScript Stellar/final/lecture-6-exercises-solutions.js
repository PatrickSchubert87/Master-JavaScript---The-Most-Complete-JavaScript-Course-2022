/* ES8 exercises
*/
/*1) 
Now, if we want to remind the user what credit card he/she is
using when doing an online payment for example, 
we don’t want to display the full card number
like this:
2015 4455 1121 2362;

Instead, we need the output to be like
Outputs: "************2362":


Use the cardNumber const as the one i provided below:

const cardNumber = '2015 4455 1121 2362';

A) You need to use slice method to slice the last 4 digits and store it in a variable last4digits
B) You need to find the how many * you need to use to fill the gap using the cardNumber length minus
the length of the 4 digits and store it in variable called remainingLength
C) Create the maskedCardNumber variable and use padStart on last4digits. as parameter pass
the the remaining length and second parameter '*'

console.log(maskedNumber); // Outputs: "************2362"

*/

const cardNumber = '2015 4455 1121 2362';
const last4Digits = cardNumber.slice(-4);
const remainingLength = cardNumber.length - last4Digits.length;
const maskedCardNumber = last4Digits.padStart(remainingLength, '*')
console.log(maskedCardNumber);


//2 Use the printObj with Object.values to get the wanted result
const printObj ={
    this: 'This',
    is: 'is',
    awesome: 'awesome'
};
//Use Object.values and print out this sentence
//This is awesome
const result= Object.values(printObj).map(value => value).join(' ');
console.log(result);