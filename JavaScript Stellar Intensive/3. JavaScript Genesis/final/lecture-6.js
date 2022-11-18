//JAVASCRIPT ARRAYS

var firstArray = ["First", "Second", "Third"];
console.log(firstArray);
//GET THE FIRST ITEM FROM AN ARRAY
var first = firstArray[0];
console.log(first);
//GET THE SECOND ITEM FROM AN ARRAY
var second = firstArray[1];
console.log(second);
//console.log(firstArray[1]);
//GET THE THIRD ITEM FROM AN ARRAY
var third = firstArray[2];
console.log(third);
//console.log(firstArray[2]);

//mix array
var mixArray = [1,2,3,'Four',true,false,function mix(){console.log('mix')}];
console.log(mixArray);

//
var innerArr = ['Rick',['12345343','Melbourne','Australia']];
console.log(innerArr);
var newArray = innerArr[1];
console.log(newArray);

//LETS FIND MELBOURNE FROM THE INNER ARRAY
console.log(innerArr[1][1]);

//JS PREDEFINED METHODS
var colors = ['red', 'orange', 'blue', 'brown', 'black', 'yellow','green', 'purple'];
console.log(colors);
//1)SHIFT
var red = colors.shift();
console.log('shift',colors);
//1)UNSHIFT
 colors.unshift(red);
console.log('unshift',colors);
//POP to remove the last item of the array
var purple = colors.pop();
console.log('pop',colors);
//PUSH to remove the last item of the array
colors.push(purple);
console.log('push',colors);
//SORT
console.log('sort',colors.sort());

//CANCAT
// colors.concat(['pink']);
colors = colors.concat(['pink']);
console.log('concat',colors);