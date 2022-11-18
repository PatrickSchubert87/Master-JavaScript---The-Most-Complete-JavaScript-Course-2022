//MOUSE EVENTS
/*
1) mouseenter
event is fired at an Element when a pointing device 
like a mouse is initially moved into that element or hotspot.
2) mouseleave
event is fired at an Element when a pointing device 
like a mouse is moved out from that element or hotspot.

3) mouse over --- similar to 1) homework
4) mouse out ---  similar to 2) homework

5) mouseup --- event is fired when we release
the mouse or trackpad on the selected element
6) mousedown --- event is fired when we press on the 
selected element

7) mousemove --- event is fired when we are moving 
the mouse on the selected dom element
*/



var addBtn = document.querySelector('.addBtn');
var header = document.querySelector('.header');
//fn for catching all of the event types

function catchEvent(e){
    console.log('The Event Type is: '+ e.type);
    if(e.type === 'mousemove'){
        console.log('X: '+e.offsetX + ' & ' + 'Y: '+ e.offsetY);
    }
}

//1) mouseenter
//header.addEventListener('mouseenter',catchEvent);

//2) mouseleave
//header.addEventListener('mouseleave',catchEvent);

//5) mouseup
//addBtn.addEventListener('mouseup',catchEvent);
//6) mousedown
//addBtn.addEventListener('mousedown',catchEvent);

//7) mousemove

header.addEventListener('mousemove',catchEvent);