/*
JSON
1) JavaScript Object Notation
2) Is a syntax for storing and exchanging data, 
Basically we use JSON to send text from the browser or 
client side to the server side
3)JASON is text build on that javascript object notation

We can send data from client to server using XML as well.
XML old and not popular as JSON
 
JSON EXAMPLE: 
{
    "student"
    [
        {"firstName":"Andy", "lastName":"Cruise"},
        {"firstName":"Rudy", "lastName":"Garcia"},
        {"firstName":"Novak", "lastName":"Djokovic"}
    ]
}
IN JSON EXAMPLE:
1) EVERYTHING NEEDS TO BE A STRING WRAPPED IN DOUBLE QUOTES NOT SINGLE.
2) JSON IS TEXT
3) WHY JSON?
 WELL JSON CAN BE READ BY ALL OF THE LANGUAGES ON SERVER SIDE

XML EXAMPLE 

<students>
 <student>
    <firstName>Andy</firstName> <lastName>Cruise</lastName>
 </student>
  <student>
    <firstName>Rudy</firstName> <lastName>Garcia</lastName>
 </student>
 <student>
    <firstName>Novak</firstName> <lastName>Djokovic</lastName>
 </student>
</students>
SO BOTH JSON AND XML ARE STILL USED TO TRANSFER DATA

 */
 
//1)CLIENT SIDE: CONVERT JAVASCRIPT OBJ TO JSON
const student = {
   firstName: 'Andy',
   lastName: 'Garcia'
}
//BEFORE SENDING THE DATA I NEED TO CONVERT TO JSON FORMAT
//stringify
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

//2) SERVER WILL RETURN BACK DATA TO THE CLIENT IN JSON FORMAT
//CONVERT THE JSON FORMAT TO JAVASCRIPT OBJ
//method called parse
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);
