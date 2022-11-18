/*

LETS REGISTER USER

FOR EXAMPLE WE HAVE PAGE THAT IS FOR BUYING PRODUCTS

AND WE WANT TO BE ABLE TO ALLOW USERS TO REGISTER IN OUR DATABASE

SO WE NEED DATABASE BUT IN OUR CASE WE WILL CREATE ARRAY THAT WILL BE CALLED

DATABASE. SECOND IS TO BE ABLE TO REGISTER THE USER, WE DON'T HAVE ANY FORMS

BUT WE DO KNOW HOW TO PROMPT THE USER FOR DATA. THE GATHERED DATA LETS STORE

IT IN OUR DATABASE AS USER OBJECT SO WE CAN REDIRECT THE USER TO ITS PROFILE

PAGE!

 

1) Create database array that will be empty and it will hold user objects in future

2) prompt the user to enter its name and store it in a variable called userName

3) prompt the user to enter its email address and store it in a variable called userEmail

4) prompt the user to enter a password and store it in  a variable called userPassword

5) create function register that will take three arguments from the prompt 


6) fill the database with user object that will contain the three fields

name,email, and password

7) Try canceling the prompt and see what will happen

8) Do you get database with null or empty values?

9) How we can fix this?

10) Try saving into database user objects only when all of the prompt data is filled 

11) Check if the name of the user object in the database is same with the name of the
userName we got it from the promtp.

if yes then display Welcome To Your Profile Page Dear --'name of the user here'

*/

/**
 * First Try
 */

// const database = [];

// const userName = prompt("What's your name?");
// const userEmail = prompt("Please enter an email");
// const userPassword = prompt("Please create a password");

// const user = {
//     name: userName,
//     email: userEmail,
//     password: userPassword
// }

// function register(userName, userEmail, userPassword) {
//     user.name = userName;
//     user.email = userEmail;
//     user.password = userPassword;
// }

// if(userName === "" || userEmail === "" || userPassword === "") {
//     alert("Please enter all fields");
// } else {
//     register(userName, userEmail, userPassword);
//     database.push(user);
//     alert(`Welcome To Your Profile Page Dear ${userName}`);
// }

// console.log(database);


/**
 * Second Try
 */

// var database = [];
// var userName = prompt("What's your name?");
// var userEmail = prompt("Please enter an email");
// var userPassword = prompt("Please create a password");

// function register(name, email, password) {
  
//   var user = {
    
//     name: userName,
//     email: userEmail,
//     password: userPassword
    
// }
 
//   database.push(user);
//   alert(`Welcome To Your Profile Page Dear ${user.name}`);
// }

// if(userName === "" || userEmail === "" || userPassword === "") {
//     alert("Please enter all fields");
// } else {
//     register(name, email, password);
// }

// console.log(database);

/**
 * Third Try
 */

var database = [];
var userName = prompt("What's your name?");
var userEmail = prompt("Please enter an email");
var userPassword = prompt("Please create a password");

function register(name, email, password) {

    database.push({
        name: userName,
        email: userEmail,
        password: userPassword
    })
}

if(userName === "" || userEmail === "" || userPassword === "") {
    alert("Please enter all fields");
} else {
    register(name, email, password);
}

if(userName === database[0].name) {
    alert(`Welcome To Your Profile Page Dear ${database[0].name}`);
}

console.log(database);


