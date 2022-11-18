/*ES6 Promises

Def:

The Promise object represents the eventual completion (or failure) of an asynchronous
operation and its resulting value.

MY DEF:

PROMISE IS AN OBJECT THAT MAY PRODUCE A VALUE IN FUTURE. THIS WILL BE A VALUE THAT IS RESOLVED
OR A REASON WHY ITS REJECTED OR NOT RESOLVED.

 

PROMISE CAN BE IN ONE OF THE 3 POSSIBLE STATES:
    1) Pending: initial state, neither fulfilled nor rejected.  Initial State, before the Promise succeeds or fails

    2) Fulfilled- Resolved: operation completed successfully.

    3) Rejected: failed promise.
BEFORE PROMISES WE HAD CALLBACK


What is the difference between Callbacks and Promises?
The main difference between Callback Functions and Promises is that we attach 
a callback to a Promise rather than passing it.
So we still use callback functions with Promises, but in a different way (chaining). 

*/

//FIRST PROMISE
const promise = new Promise((resolve,reject) =>{
    if(true){
        resolve('This has been resolved.');
    }
    else{
        reject('Error, this has been rejected!');
    }
});

//RUN A PROMISE

// promise
// .then(result => console.log(result));
promise
.then(result => result + ';')
.then(data => {
    throw Error
    console.log(data);
})
.catch(() => console.log('error, something happened'));


//ASYNC EXAMPLE
const newPromise1 = new Promise((res,rej) => {
    setTimeout(res, 2000, '1. Resolved in 2s')
});
const newPromise2 = new Promise((res,rej) => {
    setTimeout(res, 4000, '2. Resolved in 4s')
});
const newPromise3 = new Promise((res,rej) => {
    setTimeout(res, 3000, '3. Resolved in 3s')
});
const newPromise4 = new Promise((res,rej) => {
    setTimeout(res, 5000, '4. Resolved in 5s')
});

const all = Promise.all([ newPromise1, newPromise2, newPromise3, newPromise4])
.then(results => console.log(results));
console.log(`If this line of code is printed before
the 4 promises then this is async non-blocking code`);


//FETCH METHOD TO A URL
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => console.log(data));

const jsonList = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(jsonList.map(url =>{
    return fetch(url).then(response => response.json())
})).then(data => {
    console.log( data[0]);
    console.log( data[1]);
    console.log( data[2]);
}).catch(() => console.log('error'));