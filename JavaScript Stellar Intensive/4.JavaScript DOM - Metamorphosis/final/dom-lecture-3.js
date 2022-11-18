//TEMPLATE FOR CREATING NEW ELEMENT
/**
 * 
 <li class="element" id='elementId'>
    Going To The Zoo
    <span class="close">X</span>
 </li>
 */

 //1) CREATE NEW LIST ELEMENT
 var listElement = document.createElement('li');

 //2) ADD CLASS NAME
 listElement.className = 'element';

 //ADD ID TO LIST ELEMENT
 listElement.setAttribute('id','elementId');
 //4 ADD TEXT

 listElement.textContent = 'Going To The Zoo';

 //5 CREATE NEW SPAN ELEMENT
 var span = document.createElement('span');

 //6 ADD CLASS TO THE SPAN ELEMENT CALLED CLOSE
 span.className = 'close';
 //7) ADD TEXT
 span.textContent = 'X';
 //8 APPEND SPAN AS A CHILD TO LIST ELEMENT
 listElement.appendChild(span);

 //9 SELECT UL OR LIST ELEMENTS PARENT ELEMENT
 var ul = document.querySelector('#myUL');

 //10 ADD LOST ELEMENT AS A CHILD OF THE UL
 ul.appendChild(listElement);
 //OUTPUT

//  console.log('1',listElement);
//  console.log('2',span);
 console.log('3',ul);