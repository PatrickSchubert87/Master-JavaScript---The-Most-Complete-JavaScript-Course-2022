//ARRAY EXERCISES, USE CONSOLE LOG TO PRINT THE RESULT
//USE THE FOLLOWING ARRAY
var cars = ["Saab", "Volvo", "BMW","Audi","Tesla","Ford","Lexus","HSV","Toyota","Chevrolet"];


//0) Sort Array
//1) Remove the First Item from the array and store it in a variable
//2) Remove the Last Item From the array and store it in a variable
//3) Remove Ford from the array and store it in a variable
//find out the method that do this online and this returns an array back like this ["Ford"]
//4)  Add Audi, Volvo and the returned Ford array in new array called cars1
//5) Access Ford from cars1
//6) Save now the ford item into a variable
//7) Add Audi, Volvo and the Ford now to the original cars array
//8) Sort the original cars array in reverse order
console.log(cars);
//0) Sort Array
console.log(cars.sort());
//1) Remove the First Item from the array and store it in a variable
var audi = cars.shift();
console.log(cars);
console.log(audi);
//2) Remove the Last Item From the array and store it in a variable
var volvo = cars.pop();
console.log(cars);
console.log(volvo);
//3) Remove Ford from the array and store it in a variable
//find out the method that do this online and this returns an array back like this ["Ford"]
var ford = cars.splice(2,1);//index or the position to add/remove items
//how many	Optional. The number of items to be removed. If set to 0, no items will be removed
console.log(cars);
console.log(ford);
//4) Add Audi, Volvo and the returned Ford array in new array called cars1
var cars1 = [audi,volvo,ford];
console.log(cars1);
//5) Access Ford from cars1
console.log(cars1[2][0]);
//6) Save now the ford item into a variable
var ford = cars1[2][0];

//7) Add Audi, Volvo and the Ford now to the original cars array
cars.push(audi);
cars.push(volvo);
cars.push(ford);
console.log(cars);
//8) Sort the original cars array in reverse order

console.log(cars.reverse())
