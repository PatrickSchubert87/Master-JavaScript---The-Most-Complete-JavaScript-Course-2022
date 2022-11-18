//DOM EVENTS CONT...
/*
    READ ABOUT EVENTS
        https://developer.mozilla.org/en-US/docs/Web/Events
*/
/*  CHARACTER CODE SITE 
      EVERY KEY THAT IS TYPED IS ASSOCIATED WITH KEYCODE
        https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/
/*  TO CHECK THE LASTEST BROWSER SUPPORT GO TO
        https://caniuse.com/
*/

//GET THE ADD BTN
var addBtn = document.querySelector('.addBtn');
//GRAB THE INPUT
var input = document.querySelector('.input');
//UL
var ul = document.querySelector('#myUL');

function inputSize(){
    if(input.value.length > 0){
        return true;
    }
    return false;
}

//CREATE NEW LIST ELEMENT
function createNewListElement(){
    if(inputSize()){
        //1) CREATE NEW LIST ELEMENT
        var li = document.createElement('li');
        //2) append text to LI
        li.appendChild(document.createTextNode(input.value));
        //3 CREATE NEW SPAN ELEMENT
        var span = document.createElement('span');

        //4 ADD CLASS TO THE SPAN ELEMENT CALLED CLOSE
        span.className = 'close';
        //5) ADD TEXT
        span.appendChild(document.createTextNode('X'));
        //6 APPEND SPAN AS A CHILD TO LIST ELEMENT
        li.appendChild(span);
        //7) APPEND THE LI TO THE UL
        ul.appendChild(li);
        //8) Clean the input filed
        input.value = "";
  }
  else{
      alert('Input Filed cannot be empty!');
  }
}


//FN FOR ADDING NEW LIST ELEMENT
function addItem(e){
  // e.preventDefault();
    createNewListElement();      
}

function addItemKeyDown(e){
    if(e.keyCode === 13){
        createNewListElement();
    }
}
addBtn.addEventListener('click',addItem);
input.addEventListener('keydown', addItemKeyDown);

