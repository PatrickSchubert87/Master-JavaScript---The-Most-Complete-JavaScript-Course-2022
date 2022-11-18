/* 
Async / await 

*/

//1) convert the fetch promise into async await
fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(resp => resp.json())
.then(data => console.log(data.name));

async function getName() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const data = await response.json();
    console.log(data.name);
}
getName();

//2 Update the async function from the lecture to not have .then methods inside
const jsonList = [
    'https://jsonplaceholder.typicode.com/userss',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];
const getJsonData = async function(){
    try{
    const [users, posts, albums ] = await Promise.all(jsonList.map(async function(url ){ 
        const response = await fetch(url);
        return data = await response.json();
    }));
    console.log('users ',users);
    console.log('posts ',posts);
    console.log('albums ',albums);

    }catch(error){
        console.log(error);
    }
 }
getJsonData();