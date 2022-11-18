/*
AJAX
WHAT IS AJAX?
Asynchronous JavaScript and XML. 
AJAX is a technique for creating fast and dynamic web pages.
AJAX allows web pages to be updated asynchronously by exchanging small
amounts of data with the server behind the scenes. 
This means that it is possible to update parts of a web page,
without reloading the whole page


1) IN THE PAST THIS WAS DONE USING XMLHttpRequest();
2) THEN JQUERY REPLACED THIS BY USING SOMETHING LIKE THIS:
$.getJSON('/url/',function(data){
});
3) NOW THERE IS FETCH WHICH IS MORE ELEGANT
fetch('/url').then(response => {
    console.log(response);
});

https://jsonplaceholder.typicode.com/
*/




  const btn = document.querySelector('.btn');
  btn.addEventListener('click', function(e){
      e.preventDefault();
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log(data))
  })