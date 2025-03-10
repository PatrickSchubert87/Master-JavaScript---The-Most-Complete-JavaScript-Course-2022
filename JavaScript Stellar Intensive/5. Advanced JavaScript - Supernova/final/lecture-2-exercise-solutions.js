//ES6 ECMAScript
/*
 Solutions are in lecture-2-exercise-solutions.js
 Make sure if you want to test it in the browser 
 change the index.html script into
 <script src="./lecture-2-exercise-solutions.js"></script>
 Do this for all of the exercises
 */

 //1) CREATE FN CALLED SUM IN ONE LINE THAT RETURNS TWO ADDS TWO PARAMETERS A & B
 const sum = (a,b) => a + b;

 //2) WHAT DOES THE LAST LINE OF THIS CLOSURE FN RETURNS?
 const addition = a => b => a + b;
 let add3 = addition(3);
 add3(3);//returns 6

 //3)WHAT DOES THE LAST LINE OF THIS CURRYING FN RETURNS?
 const first = (a, b) => a + b;
 const curryingFirst = (a) => (b) => a + b;
 curryingFirst(15)(6);//21

 //4) Composing function, what does the last line return
 const composeFn1 = (d, e) => (f) => d(e(f));//WOW!!!
 //1) Lets declare the a function from composeFn = (a, b)
 const d = (num) => num + 3;
 //2) Lets declare the b function composeFn = (a, b)
 const e = (num) => num * 6;
 
 composeFn1(d,e)(4);//returns 27
 