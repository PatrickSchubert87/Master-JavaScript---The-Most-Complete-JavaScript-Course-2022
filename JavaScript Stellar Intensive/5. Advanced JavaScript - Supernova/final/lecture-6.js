/* TYPE COERCION
1) USEFULL LINKS
//EQUALITY TABLE REFERENCE
https://dorey.github.io/JavaScript-Equality-Table/
//2)MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
//3)ECMAScript Language Documentation
https://262.ecma-international.org/11.0/
Look about todays lecture under Abstract Equality Comparison
*/


console.log("5 == '5'", 5 == '5');
/* TYPE COERCION DEFINITION:
Type coercion is the automatic or implicit conversion of values from one 
data type to another (such as strings to numbers). 
Type conversion is similar to type coercion because they 
both convert values from one data type to another with one 
key difference — type coercion is implicit whereas type 
conversion can be either implicit or explicit.
NOTE:
WHEN JAVASCRIPT ENGINE SEES DOUBLE EQUAL == SIGN THEN IT DO 
TYPE COERCIAN AUTOMATICALLY. SO IT CHECKS BOTH OPERANDS THAT 
ARE LEFT AND RIGHT FROM THE == DOUBLE SIGN AND CONVERTS THEM TO SAME ON.
NOTE: DOUBLE EQUAL SIGN IS NOT THE ONLY SIGN WHEN TYPE COERCION
OCCURS
*/

//When using three === equals signs for JavaScript equality testing,
// everything is as is. Nothing gets converted before being evaluated.


console.log("5 === '5'", 5 === '5');
// 0 to boolean of false
if(0){
    console.log(' Zero Means True');
}
else{
    console.log('Zero Means False');
}
//1 to boolean of true
if(1){
    console.log('One Means True');
}
else{
    console.log('One Means False');
}

// -0, + 0 returns true with ===
console.log('-0 === +0', -0 === +0);
// -0, + 0 we want to return false
//we can achieve that with Object.is
console.log('Object.is -0 === +0',Object.is(-0,+0));
// NaN === NaN returns false with ===
console.log('NaN === NaN', NaN === NaN);
// NaN === NaN returns true if we use Object.is
console.log('Object.is NaN === NaN',Object.is(NaN,NaN));