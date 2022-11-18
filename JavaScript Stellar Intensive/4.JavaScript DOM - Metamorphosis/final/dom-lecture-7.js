//KEYBOARD EVENTS
/* --
1)keydown 
 The keydown event is fired for all keys, regardless 
 of whether they produce a character value.
2)keyup
 -- The keyup event is fired when a key is released.
3)keypress 
-- The keypress event is fired when a key that 
produces a character value is pressed down

4)focus
The focus event fires when an element has received focus.
For example clicking inside our input html element
5)blur
The blur event fires when an element has lost focus.
6)cut
The cut event is fired when the user has initiated a "cut"
action through the browser's user interface.
right click and cut or control X windows
or command x in mac
7)paste
The paste event is fired when the user has initiated a 
"paste" action through the browser's user interface.
8) select event -- Homework
This select event fires when some text has been selected.
go to MDN website and tyoe element: select event
 */

var input = document.querySelector('.input');

//keydown
 //input.addEventListener('keydown', catchEvent);

//keyup
//input.addEventListener('keyup', catchEvent);
//focus
//input.addEventListener('focus', catchEvent);
//blur
// input.addEventListener('blur', catchEvent);

//cut
//input.addEventListener('cut', catchEvent);
//past
//input.addEventListener('paste', catchEvent);
function catchEvent(e){
    console.log('Event Type: '+ e.type);
    console.log('Character: '+ e.target.value + ' KeyCode :'+ e.keyCode);
}