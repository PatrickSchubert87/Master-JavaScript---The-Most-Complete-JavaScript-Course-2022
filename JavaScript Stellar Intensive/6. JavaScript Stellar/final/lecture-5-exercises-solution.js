/*
ES7 EXERCISES 
TRY THEM BEFORE YOU RUN THEM IN THE CONSOLE
*/
const cars = ['BMW','FORD','AUDI', 'PORSCHE','MERCEDES'];
//1) check if the cars array includes name of the car lincoln
console.log(cars.includes('lincoln'));//false
//2) Find if the array have these 3 letters MER, if it does then
//print back the name in separate array, TIP: use filter with condition
const newArray = cars.filter(carName => carName.includes('MER'));
console.log(newArray);//MERCEDES
//3) CALCULATE THE POWER OF 10 OF A NUMBER ENTERED IN THE FUNCTION AS ARGUMENT
const pow10 = (x) => x**10;
console.log(pow10(10));