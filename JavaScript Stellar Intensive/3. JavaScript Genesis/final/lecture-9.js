//JAVASCRIPT LOOPS

//FOR
//WHILE
//DO WHILE
//FOREACH

var cars = [
    'Saab',
    'Volvo',
    'BMW',
    'Audi',
    'Tesla',
    'Ford',
    'Lexus',
    'HSV',
    'Toyota',
    'Chevrolet',
    'Mercedes'
];
console.log(cars);
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);
// console.log(cars[4]);
// console.log(cars[5]);
// console.log(cars[6]);
// console.log(cars[7]);
// console.log(cars[8]);
// console.log(cars[9]);
// console.log(cars[10]);

//FOR LOOP

for(var i = 0; i < 5; i++){
    //code block   //i = i + 1
  
    //   i  i < 5
    //1) 0, 0 < 5 true , console.log(i), i++
    //2) 1, 1 < 5 true, console.log(i), i++
    //3) 2, 2 < 5 true, console.log(i), i++
    //4) 3, 3 < 5 true, console.log(i), i++
    //5) 4, 4 < 5 true, console.log(i), i++
    //6) 5, 5 < 5 false, break out from the loop
    console.log(i);
}

//FOR LOOP EXAMPLE
for(var j = 0; j < cars.length; j++){
    console.log(cars[j]);
}

//WHILE LOOP
console.log('while loop');
var i = 0;
while(i < 5){
    console.log(i);
    i++;
}

//DO WHILE
console.log('do while loop');
var k = 10;
do{
    console.log(k);
    k++;
}while(k < 10);

//FOREACH

//array.forEach(function(currentValue,index,arr)=>{})

cars.forEach((currentElement,index) => {
    console.log(currentElement, index);
});
console.log('for each loop');

function loopArray(el,i){
    console.log(el,i);
}
cars.forEach(loopArray);