/* ES9 ECMAScript 2018

1) Spead Operator on Objects

*/

//SPREAD OPERATOR ON ARRAYS ES6
const carsInStockArray = [125,14,18,33,88,79];

const calcInStock = (a,b,c,d,e,f) =>{
    let sum = a + b + c + d + e + f;
    return sum;
}
//call the fn
const result = calcInStock(...carsInStockArray);
console.log("Total number of cars in the yard is: ",result);

//SPREAD OPERATOR ON OBJECTS
const carsInStockObj = {
    bmw: 15,
    audi: 16,
    mercedes: 24,
    ford: 18
};

const {bmw, ...rest} = carsInStockObj;
console.log(bmw);
console.log(rest);