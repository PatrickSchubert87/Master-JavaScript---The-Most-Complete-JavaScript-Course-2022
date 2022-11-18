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


6) fill the database with user object that will contain the three fields name,email, and password

7) Try canceling the prompt and see what will happen

8) Do you get database with null or empty values?

9) How we can fix this?

10) Try saving into database user objects only when all of the prompt data is filled 

11) Check if the name of the user object in the database is same with the name of the
userName we got it from the prompt.

if yes then display Welcome To Your Profile Page Dear --'name of the user here'

*/


//1) Create database array that will be empty and it will hold user objects in future
var database = [];
//2) prompt the user to enter its name and store it in a variable called userName
var userName = prompt('Your Name');

//3) prompt the user to enter its email address and store it in a variable called userEmail
var userEmail = prompt('Your Email Address');
//4) prompt the user to enter a password and store it in  a variable called userPassword
var userPassword = prompt('Your Password');

//5) create function register that will take three arguments from the prompt

function register(name,email,pass){
//6) fill the database with user object that will contain the three fields name,email, and password
database.push({
    name: name,
    email:email,
    password:pass
});
}
//7,8,9,10
if(userName !=null && userEmail !=null && userPassword !=null){
    register(userName, userEmail, userPassword);  
}
else{
    alert('Some of the form fields are empty please try again');
}
if(database[0].name === userName){
    console.log('Welcome  to Your Profile Page Dear '+ userName);
}
else{
    alert('Something went wrong please try again later');
}

console.log(database);