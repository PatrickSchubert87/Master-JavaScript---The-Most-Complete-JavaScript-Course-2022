//arrays - more advanced concepts
/*
METHODS WE HAVE USED

--- FOREACH
--- FOR
--- WHILE
--- DO WHILE

1) MAP
2) FILTER
3) REDUCE
*/
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

//FOREACH TO LOOP THROUGH ALL OF THE ELEMENTS
numbersArray.forEach((el,index) => {
    console.log(el + ' index :'+index);
});
//CREATE NEW EMPTY ARRAY AND PUSH THE ELEMENTS

// const evenArray = [];
// numbersArray.forEach((el,index) => {
//     if(el % 2 === 0){
//         evenArray.push(el);
//     }
// });
// console.log('Even: ', evenArray);

//1) MAP
//callback(currentValue, index, arr)
// const mappedArray = numbersArray.map((el)=>{
//     return el*1;
// });

// const mappedArray = numbersArray.map((el)=>el*1);
const mappedArray = numbersArray.map((currentElement,index,array)=>{
    //EACH INDEX
    //console.log('index',index);
    //entire array
    //console.log(array);
    return currentElement;
});
console.log('Mapped array ',mappedArray);

//2) FILTER
const filteredArray = numbersArray.filter((el) => {
    if(el % 2 != 0){
        return el;
    }
});
console.log('filter array',filteredArray);

//3)REDUCE

const reducedArray = numbersArray.reduce((total, el)=>{
    //console.log('total ', total, 'el ', el);
    return total + el;
},5);
console.log('reduced', reducedArray);

/*
reduce() method reduces the array to a single value

the reduce() method executes a provided function for each
value of the array ( from left to right)

the returned value of the function is stored in an 
accumulator(total/result)
*/
