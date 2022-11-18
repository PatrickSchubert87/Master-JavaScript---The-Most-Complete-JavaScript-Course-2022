//GET PROPERTIES FROM THE ELEMENTS
var title = document.querySelector('h2');
console.log('class: ' + title.className);
console.log('id: ' + title.id);

//APPLY STYLES
title.style.backgroundColor = 'orangered';
title.style.padding = '10px 20px';
title.style.color = 'black';
//MODIFY THE CONTENT
title.textContent = 'WOW';
title.innerText = 'WOW1';
title.innerHTML = '<i>Wow This is Awesome!</i>';

//GET THE LAST ELEMENT
// console.log(document.querySelector('li:last-child').classList.add('listClass'));
// console.log(document.querySelector('li:nth-child(1)').classList.add('listClass'));
// console.log(document.querySelector('li:nth-child(3)').classList.add('listClass'));

// console.log(document.querySelector('li:nth-child(1)').classList.remove('listClass'));
// console.log(document.querySelector('li:nth-child(3)').classList.remove('listClass'));

// console.log(document.querySelector('li:nth-child(odd)').classList.add('listClass'));

// console.log(document.querySelector('li:nth-child(even)').classList.add('listClass'));



//Arrays on HTMLCollection
var elements = document.getElementsByClassName('element');
console.log(elements);
//convert the HTMLCollection into array
var elementsArr = Array.from(elements);
console.log(elementsArr);

elementsArr.forEach(element => {
    console.log(element);
});

//Arrays on NodeList
var spanEl = document.querySelectorAll('.close');
console.log(spanEl);
spanEl.forEach(curr => {
    console.log(curr.textContent ='#');
});