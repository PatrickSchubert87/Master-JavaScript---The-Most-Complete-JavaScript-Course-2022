//JAVASCRIPT OBJECTS
var student = { 
    name: 'Toby',
    age: 33,
    occupation: 'Web Dev',
    subjects: ['Calculus','Databases','Java Programming','C++','Cyber Security','Networking'],
    paid: function(){
        console.log('PAID!');
    }
}
console.log(student);
//GET THE NAME,AGE FROM STUDENT OBJ
console.log(student.name);
console.log(student.age);
console.log(student.occupation);

student.id = 123456789;
console.log(student);
student.age = 23;
console.log(student);
//GET THE ARRAY ITEM CALLED C++ FROM STUDENT OBJ
console.log(student.subjects[3]);

var studentArr = [
    {
        studentID: '123456',
        subjectsCount: 3
    },
    {
        studentID: '123456232',
        subjectsCount: 4
    },
    {
        studentID: '12345612121',
        subjectsCount: 1
    },
];
console.log(studentArr);
//GET THE SUBJECTS COUNT OF AN OBJECT INSIDE AN ARRAY
console.log(studentArr[1].subjectsCount);

//METHOD
student.paid();

var emptArr = [];
var emptObj = {};
console.log(emptArr);
console.log(emptObj);

function fillFunction(){
    emptObj.name = 'Rick';
    emptArr.push('James');
}
fillFunction();
console.log(emptArr);
console.log(emptObj);

//NULL
var nullObj = null;
nullObj.name = 'Rick';
console.log(nullObj);