//EVENT BUBBLING AND EVENT DELEGATION

/*
Bubbling
When an event happens on an element it first runs
the handlers on it, then on its parents, then all the 
way up on their ancestors until it reaches 
the <html> element.

Event Delegation

Instead of adding the event listener on the element
we can just add it on outer element or 
the parent of that element and from the parent 
we can find the element we are trying to manipulate
*/

//DOM SELECTORS
var addBtn = document.querySelector('.addBtn');
var header = document.querySelector('.header');
var body = document.querySelector('.body');
var ul = document.querySelector('.myUL');
//EVENT BUBBLING
// body.addEventListener('click', function(e){
//     console.log('Body');
// });
// header.addEventListener('click', function(e){
//     console.log('Header');
// });
// addBtn.addEventListener('click', function(e){
//     console.log('Add Button');
// });

//EVENT DELEGATION
ul.addEventListener('click', removeItem);
function removeItem(e){
    //console.log(e.target);
    //1)CLASSNAME
    // if(e.target.className ==='close' ){
    //     console.log('Deleting the item.....');
    // }
    if(e.target.classList.contains('close') ){
        //console.log('Deleting the item.....');
        //console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }
}