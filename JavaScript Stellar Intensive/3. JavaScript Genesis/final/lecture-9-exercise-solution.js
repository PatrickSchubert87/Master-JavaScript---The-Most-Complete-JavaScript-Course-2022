/*

IN THE PREVIOUS EXERCISE WE HAVE DONE REGISTRATION SYSTEM

NOW LETS FOCUS ON LOOPS AND WHAT WE CAN DO WITH THEM.


SO THE IDEA IS TO HAVE AN ARRAY WHERE WE STORE OUR USER OBJECTS

SAME AS WE HAD IN THE PREVIOUS EXERCISE BUT INSTEAD SAVING DURING THE REGISTRATION

PROCESS LETS MANUALLY ADD COUPLE OF USER OBJECTS

 

THIS SECTION IS ABOUT THE: LOGIN PROCESS

 

SO WE HAVE DATABASE OF REGISTERED USERS LETS SAY 5,

-CREATE FIVE USER OBJECTS INSIDE THE DATABASE.

-LATER WE NEED TO LOGIN THE USER AND SHOW HIS PROFILE PAGE WHERE HE CAN SEE HIS DETAILS.

WHAT IS USUAL ABOUT PROFILE PAGES IS THAT YOU CAN CHANGE YOUR DETAILS

BUT WE ARE NOT GOING TO DO THIS IN THIS STAGE.

SO LETS FINALIZE THE STEPS ONE BY ONE

1) Create database array that will be hold 5 user objects, each user object should look like this one

{

        name: "Rick",

        lastName: "Sekuloski",

        email: "rick@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"

    },

 

2) prompt the user to enter its email and store it in a variable called userEmail

3) prompt the user to enter a password and store it in  a variable called userPassword

4) create function userLogin that will take two arguments from the prompt

and it will check if the current user data is in the database array ! NOTE: USE LOOPS

5) If user is found then your output should look like the following

 

Welcome back this is your profile page

1. You can edit your name: Rick

2. You can edit your last name: Sekuloski

3. You can edit your email address: rick@gmail.com

4. You can edit your password: password123

Your account was created at: 11/11/2023

*/

//1) Create database array that will be hold 5 user objects, each user object should look like this one
var database = [
    {
        name: "Rick",

        lastName: "Sekuloski",

        email: "rick@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"
    },
    {
        name: "James",

        lastName: "Jefferson",

        email: "james@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"
    },
    {
        name: "Andy",

        lastName: "Murray",

        email: "andy@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"
    },
    {
        name: "Silvio",

        lastName: "Berlusconi",

        email: "silvio@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"
    },
    {
        name: "Tom",

        lastName: "Cruise",

        email: "tom@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"
    },
];
console.log(database);

//2) prompt the user to enter its email and store it in a variable called userEmail
var userEmail = prompt('Enter your email address');
//3) prompt the user to enter a password and store it in  a variable called userPassword
var userPassword = prompt('Enter your password');
//4) create function userLogin that will take two arguments from the prompt
function userLogin(email,pass){
    // console.log(email);
    // console.log(pass);
    for(var i = 0; i < database.length; i++){
        if(database[i].email === email && database[i].password === pass){
            return database[i];
                    // console.log('1. You can edit your name:' + database[i].name);

                    // console.log('2. You can edit your last name:' + database[i].lastName);

                    // console.log('3. You can edit your email address:' + database[i].email);

                    // console.log('4. You can edit your password:' + database[i].password);

                    // console.log('Your account was created at:' + database[i].createdAt);
        }

    }
    return false;
}

var user = userLogin(userEmail,userPassword);

if(user){
    console.log('1. You can edit your name:' + user.name);

    console.log('2. You can edit your last name:' + user.lastName);

    console.log('3. You can edit your email address:' + user.email);

    console.log('4. You can edit your password:' + user.password);

    console.log('Your account was created at:' + user.createdAt);
}
else{
    alert('There is no user with this details in our system. Please try again with correct details');
}

