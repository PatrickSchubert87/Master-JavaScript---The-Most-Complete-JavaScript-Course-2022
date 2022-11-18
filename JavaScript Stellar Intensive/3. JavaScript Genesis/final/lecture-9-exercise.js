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

var database = [
    {
        name: "Rick",

        lastName: "Sekuloski",

        email: "rick@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"
    },
    {
        name: "Rick",

        lastName: "Sekuloski",

        email: "rick@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"
    },
    {
        name: "Rick",

        lastName: "Sekuloski",

        email: "rick@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"
    },
    {
        name: "Rick",

        lastName: "Sekuloski",

        email: "rick@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"
    },
    {
        name: "Rick",

        lastName: "Sekuloski",

        email: "rick@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"
    }
];

var userEmail = prompt("Please enter an email");
var userPassword = prompt("Please create a password");

function userLogin(userEmail, userPassword) {
    var user = database.forEach((email, password){
        console.log(email, password);
    });
}

userLogin();