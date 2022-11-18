//DOM EVENTS
//READ ABOUT EVENTS
//https://developer.mozilla.org/en-US/docs/Web/Events

var addBtn = document.querySelector('.addBtn');
//console.log(addBtn);

function addItem(e){
   e.preventDefault();
   //console.log('its clicked');
   console.log(e);
   //TYPE OF THE EVENT
   console.log(e.type);
   //EVENT TARGET
   console.log(e.target);
   //EVENT TARGET CLASS NAME
   console.log(e.target.className);

   //CLIENT X AND Y COORDINATES
   console.log('Horizontal ',e.clientX);
   console.log('Vertical ',e.clientY);
}
addBtn.addEventListener('click',addItem);

// addBtn.addEventListener('click',function(){
//    e.preventDefault();
//    console.log('its clicked');
// });