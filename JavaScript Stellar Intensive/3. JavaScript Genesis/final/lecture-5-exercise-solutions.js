//EXCLAIMER: You can look into the solutions for this exercise
/*I know functions are one of the hardest parts in JavaScript
lets create a function without arguments that will ask the user for the following details using the
prompt
1) What is your profession? store the value in var called profession
2) How old are you? store the value in var called age
3) Do You Have Working Experience in web development? Enter Numbers from 0 or 10...? store the value in var called experience

After collection of the details pass those arguments into new anonymous function saved in
thisIsMe variable. This function will need to print all of the details from the previous
function plus use the if else condition to check if you are junior or senior developer. 
And use return to finish the function during that if else condition.

Example if you have have more than 5 years of experience then you will be considered as senior
otherwise as junior

This function should print something like this:

1. Web Developer
2. 33 Years of Age
3. 7 Years Of Experience
That Means you are Senior Web Developer
*/





var thisIsMe = function(p,a,ex){
    console.log('1. '+ p);
    console.log('2. '+ a + ' years of age');
    console.log('3. '+ ex + ' years of experience');
    if(ex>5){
        console.log('That Means you are Senior Web Developer!');
        return;
    }
    else{
        console.log('That Means you are Junior Web Developer!');
        return;
    }
}
function details(){
    var profession = prompt('What is your profession?');
    var age = prompt('How old are you?');
    var experience = prompt('Do You Have Working Experience in web development? Put years like 0 or 5')
    thisIsMe(profession,age,experience);
}

details();