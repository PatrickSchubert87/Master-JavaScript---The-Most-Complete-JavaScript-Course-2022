//ARRAY EXERCISES, USE CONSOLE LOG TO PRINT THE RESULT
//USE THE FOLLOWING ARRAY
var cars = ["Saab", "Volvo", "BMW","Audi","Tesla","Ford","Lexus","HSV","Toyota","Chevrolet"];
console.log(cars);
//0) Sort Array
console.log(cars.sort());
//1) Remove the First Item from the array and store it in a variable
const firstArrayItem = cars.shift();
console.log(cars);
console.log(firstArrayItem);
console.log(`The firs Item in the Array was removed and is now stored in a seperat variable firstArrayItem = ${firstArrayItem}. The Array of cars is now – original array cars: ${cars}`);
//2) Remove the Last Item From the array and store it in a variable
const lastArrayItem = cars.pop();
console.log(lastArrayItem, cars);
console.log(`The last Item in the Array was removed and is now stored in a seperat variable lastArrayItem = ${lastArrayItem}. The Array of cars is now – original array cars: ${cars}`);
//3) Remove Ford from the array and store it in a variable
//find out the method that do this online and this returns an array back like this ["Ford"]
const fordArray = cars.splice(2,1);
console.log(fordArray, cars);
console.log(`The Item "Ford" was removed and is now stored in a seperat Array called [fordArray] – original array cars: ${cars}`);
//4)  Add Audi, Volvo and the returned Ford array in new array called cars1
const cars1 = [firstArrayItem, lastArrayItem, fordArray];
console.log(`A new Array with the removed cars: ${cars1}`);
//5) Access Ford from cars1
console.log(`Ford is now in a seperate array called 'fordArray' in the 'cars1' array: ${cars1[2]}`);
//6) Save now the ford item into a variable
const ford = cars1[2].toString();
console.log(ford);
//7) Add Audi, Volvo and the Ford now to the original cars array
console.log(`Exercise 7 - Array before adding items: ${cars}`);
cars.unshift(firstArrayItem);
cars.push(lastArrayItem);
cars.splice(3, 0, ford);
console.log(`First solution with multiple array functions: ${cars}`)
/**
 * Another methode to add Audi, Volvo, and Ford back to the original array is using concat()
 * Concat however doesn't work with other methods like reverse()
 */
cars = cars.concat(firstArrayItem, lastArrayItem, ford);

console.log(`Second solution with concat() function of array: ${cars}`);

// 7) Solution of author
cars.push(firstArrayItem);
cars.push(lastArrayItem);
cars.push(ford);
console.log(`Solution of author with multiple push() array functions: ${cars}`);
//8) Sort the original cars array in reverse order
console.log(cars.reverse());
