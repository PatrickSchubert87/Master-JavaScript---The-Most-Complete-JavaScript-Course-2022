/*
ES9 or ECMAScript 2018

Async
1) finally
2) for of
3) for await of

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

*/

//ES6 PROMISES AND PROMISE.ALL
const urls = [
    'https://pokeapi.co/api/v2/ability/1',
    'https://pokeapi.co/api/v2/ability/2',
    'https://pokeapi.co/api/v2/ability/3',
    'https://pokeapi.co/api/v2/ability/4'
];

// Promise.all(urls.map(url =>{
//     return fetch(url).then(ability => ability.json())
// })).then(data => {
//    // throw Error;
//     console.log('Pokemon 1: ', data[0].name);
//     console.log('Pokemon 2: ', data[1].name);
//     console.log('Pokemon 3: ', data[2].name);
//     console.log('Pokemon 4: ', data[3].name);
// }).catch(() => console.log('error'))
// .finally(()=> console.log('Finally finished'));

//convert the example to async fun

const getPokemons = async function(){

   try{
    const [pokemon1,pokemon2, pokemon3, pokemon4] = 
    await Promise.all(urls.map(async function (url){
        const response = await fetch(url);
        return data = await response.json();
        }));

        console.log('Pokemon 1 - ',pokemon1.name);
        console.log('Pokemon 2 - ',pokemon2.name);
        console.log('Pokemon 3 - ',pokemon3.name);
        console.log('Pokemon 4 - ',pokemon4.name);
   }catch(error){
       console.log("Error happened",error);
   }
}

//call async
getPokemons();

//for of
/* 
 for(variable of iterable){
     statement
 }
*/


const forOfLoop = (urls) =>{
    for(let url of urls){
        console.log(url);
    }
}

forOfLoop(urls);
//for await of using async 
const getPokemons1 = async function(){
    const promisesArray = urls.map(url => fetch(url));
    //console.log(promisesArray);

    for await (let promise of promisesArray){
        const data = await promise.json();
        console.log(data.name);
    }
 }
 
 //call async
 getPokemons1();