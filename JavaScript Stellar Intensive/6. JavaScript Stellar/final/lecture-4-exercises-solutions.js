//TRY TO GIVE ANSWER TO THIS QUESTIONS
//USE THE BROWSER CONSOLE IF ITS EASIER FOR YOU

//1) CREATE A PROMISE THAT RESOLVES IN 5 SECONDS AND RETURNS A STRING BACK SAYING 'Resolved'

const promise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("Resolved")
    },5000);
});

//2) RUN THE PROMISE TO GET THE OUTPUT "Resolved";
promise.then(result => console.log(result));

/*3) READ ABOUT promise.resolve and promise.reject online and i have put something at the end
of this lecture
use your knowledge and make the previous promise shorter using promise.resolve but
set time out to 6 seconds
*/
const promiseResolve = Promise.resolve(
    setTimeout(()=>{
        console.log('Resolved')
    },6000)
);
//4) USING PROMISE REJECT CATCH AN ERROR AND GIVE A ERROR MESSAGE LIKE THIS: ERROR HAPPENED

const rejectPromise = Promise.reject('error')
.catch(console.log('Error Happened'));

/*5 Use the pokemonURL array list so 
you can use promise.all and loop through this list and I want you
to find the name of each pokemon on that list. The promise will return
a lot of data so make sure you are consoling log the name only 
In your free time check out this page:
 https://pokeapi.co/ , so its restful api and its 
 similar to the page we did in the lecture about promises.
Make sure you are going to include catch at the end
*/

const pokemonUrls = [
    'https://pokeapi.co/api/v2/pokemon/1',
    'https://pokeapi.co/api/v2/pokemon/2',
    'https://pokeapi.co/api/v2/pokemon/3',
    'https://pokeapi.co/api/v2/pokemon/4'
]

Promise.all(pokemonUrls.map(url =>
    fetch(url).then(pokemon => pokemon.json())
))
.then(dataArray =>{
    console.log(dataArray[0].name);
    console.log(dataArray[1].name);
    console.log(dataArray[2].name);
    console.log(dataArray[3].name);
})
.catch(()=> console.log('Error'));
/*
The Promise.resolve/reject methods

Promise.resolve(value) – It resolves a promise with the value passed to it. 
It is the same as the following:

let promise = new Promise(resolve => resolve(value));

Promise.reject(error) – It rejects a promise with the error passed to it.
 It is the same as the following:

let promise = new Promise((resolve, reject) => reject(error));
*/