/* ES8 - ECMAScript 2017 

Async Await

*/

function hello1(){
    return "Hello";
}

console.log('Normal fn: ', hello1());

//async
async function hello(){
    return "Hello";
}
console.log('Async fn: ', hello());

//CONVERT TO ASYNC FN EXPRESSION    
let hello2 = async function(){
    return "Hello 2";
}
console.log('async fn expression:', hello2());

//async arrow functions
let hello3 = async () => { return "Hello 3"};
console.log('async arrow fn', hello3());

//CONSUME THE PROMISE
hello3().then((value) => console.log(value));
hello2().then(console.log);


//await keyword
async function hello4(){
    return greeting = await Promise.resolve('Await Hello');
}
hello4().then(console.log);

//FETCH FUNCTION

fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(data => console.log('fecth',data));

//ASYNC AWAIT

async function fetchUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log('async await',data);
}

fetchUsers();

const jsonList = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

// Promise.all(jsonList.map(url =>{
//     return fetch(url).then(response => response.json())
// })).then(data => {
//     console.log('users: ',data[0]);
//     console.log('posts: ',data[1]);
//     console.log('albums: ', data[2]);
// }).catch(() => console.log('error'));

//REWRITE THIS USING ASYNC AWAIT

const getData = async function(){
    try{
        const [users, posts, albums] = await Promise.all(jsonList.map(url=>{
            return fetch(url).then(response => response.json())
        }));
    
        console.log('users ', users);
        console.log('posts ', posts);
        console.log('albums ', albums);
    }catch(error){
        console.log('Error, something happened, fix me!',error);
    }
}

getData();

