//ES6 ECMAScript
/*
 You can test all of the exercises using the browser or you can use 
 console.log
 
 Solutions are in lecture-3-exercise-solutions.js
 Make sure if you want to test it in the browser 
 change the index.html script into
 <script src="./lecture-3-exercise-solutions.js"></script>

 Do this for all of the exercises
 */

/*1) Based on Lecture 3 array methods please do the following exercises
Create array called users that have 5 user objects inside
Each object needs to have firstName, lastName, country, and array of
favorite items he/she cannot live without

{
    firstName: 'Tom',
    lastName: 'Cruise',
    country: 'USA',
    items: ['phone', 'laptop', 'jumping ropes']
}
So you need five objects like this
*/
const users = [
    {
        firstName: 'Tom',
        lastName: 'Cruise',
        country: 'USA',
        items: ['phone', 'laptop', 'jumping ropes']
    },
    {
        firstName: 'Novak',
        lastName: 'Djokovic',
        country: 'Serbia',
        items: ['phone', 'tennis court', 'tennis racquet']
    },
    {
        firstName: 'Elon',
        lastName: 'Musk',
        country: 'USA',
        items: ['tesla 3 car', 'money', 'underground speed track']
    },
    {
        firstName: 'Chris',
        lastName: 'Hemsworth',
        country: 'Australia',
        items: ['Bondi Beach Surfing', 'watch', 'car']
    },
    {
        firstName: 'Heath Andrew',
        lastName: 'Ledger',
        country: 'Australia',
        items: ['Theater', 'movies', 'joker mask']
    },
];

//2) NOW CREATE NEW ARRAY WITH ONLY THE FIRST AND LAST NAMES OF USERS USING FOREACH

let newUsersForEach = [];
users.forEach(currUser =>{
    let {firstName, lastName} = currUser;
   
    let fullName;
    fullName = `${firstName} ${lastName}`;
    newUsersForEach.push(fullName);
});
console.log(newUsersForEach);
//3)NOW CREATE NEW ARRAY WITH ONLY THE FIRST AND LAST NAMES OF USERS USING MAPlet newUsersForEach = [];
const newMapArray = users.map(currUser =>{
    let {firstName, lastName} = currUser; 
   
    return `${firstName} ${lastName}`;
   
});
console.log(newMapArray);
//4)FILTER THE USERS ARRAY TO A NEW ARRAY THAT WILL INCLUDE ONLY USERS FROM AUSTRALIA
const filteredArray = users.filter(currUser =>{
    let {country} = currUser; 
   
    return currUser.country === 'Australia';
   
});
console.log(filteredArray);
//5) BONUS: CREATE NEW ARRAY THAT WILL CONTAIN ALL USER INFORMATION BUT ADD "-CHECKED" TO THE END OF EACH ITEMS FOR THE USERS
//REMEMBER THE ITEMS ARE SEPARATE ARRAY INSIDE THE OBJ

const improvedItems = users.map(currentUser =>{
    currentUser.items = currentUser.items.map(item =>{
        return item + '-CHECKED';
    });
    return currentUser;
});
console.log(improvedItems);