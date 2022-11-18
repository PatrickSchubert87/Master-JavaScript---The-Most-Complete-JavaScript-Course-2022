//DOM SELECTORS
/*
1) TAG NAME ---  getElementsByTagName
2) CLASS NAME --- getElementsByClassName
3) ID --- getElementById
4) Query Selector --- querySelector
5) Query Selector --- querySelectorAll
6) Get Attribute --- getAttribute
7) Set Attribute ---setAttribute
8) style.property
9) className
10) classList 
    = add
    = remove
    = toggle
11)innerHTML & innerTEXT
12) parentElement
13) parentElement.children

Check the features if they are working on this page
This will tell you if the browser support any of javascript
or css features you will type
So can i use is very popular website for features and browsers compatibilty
Now some new features will not work on each browser, make sure you do understand
this
https://caniuse.com/
*/

//1)TAG NAME ---  getElementsByTagName
console.log(document.getElementsByTagName("h2"));
//2)CLASS NAME --- getElementsByClassName
console.log(document.getElementsByClassName("close"));
//3 ID --- getElementById
console.log(document.getElementById("myUL"));

//4) Query Selector --- querySelector
console.log(document.querySelector("h2"));
//5) Query Selector --- querySelectorAll
console.log(document.querySelectorAll("h2"));

// Query Selector --- querySelectorAll
console.log(document.querySelectorAll(".element"));
//console.log(document.querySelectorAll("#addBtn"));

// 6) Get Attribute --- getAttribute
var x = document.querySelector("h2").getAttribute("class");
console.log(x);
// 7) Set Attribute ---setAttribute
var checked = document.querySelectorAll("li")[1].setAttribute('class','no-check');
//8) style.property
//console.log(document.querySelector("h2").style.backgroundColor='orangered');
//9) className

var titleStyle = document.querySelector("h2").className = "myStyle";

console.log(document.querySelector('li').classList);
// console.log(document.querySelector('li').classList.add('listClass'));
// console.log(document.querySelector('li').classList.remove('listClass'));
console.log(document.querySelector('li').classList.toggle('listClass'));
//11)innerHTML & innerTEXT
var p = document.querySelector('p');
p.innerHTML = '<strong> Rick </strong>';
var link = document.querySelector('a');

link.innerText = 'This is awesome';
//12) parentElement
var firstListEl = document.querySelector('li');
console.log('1', firstListEl.parentElement);
var bodyParent = firstListEl.parentElement.parentElement;
console.log('2',bodyParent );
//13) parentElement.children
console.log('3',bodyParent.children );