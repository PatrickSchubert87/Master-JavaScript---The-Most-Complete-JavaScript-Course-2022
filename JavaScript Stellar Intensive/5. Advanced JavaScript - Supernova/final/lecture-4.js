//OBJECTS REFERENCE TYPE
//CONTEXT
//THIS KEYWORD
//CLASSES
//INSTANTIATION

//1) OBEJCTS REFERENCE TYPE
const firstObject = {
    age: 30
};
const secondObject = {
    age: 30
};
const thirdObject =  firstObject;


firstObject.age = 35;
thirdObject.age = 17;
console.log('first object',firstObject);
console.log('second object', secondObject);
console.log('third object', thirdObject);
console.log(firstObject === secondObject);
console.log(firstObject === thirdObject);
//2) CONTEXT AND THIS KEYWORD
console.log(this);
//this.alert('hi');

function b(){
    console.log(this);
}

const rick = {
    myName: 'Rick',
    greet: function(){
        console.log(this.myName);
    }
}
console.log(rick.greet());

//CLASSES

class Student{
    constructor(name, id){
        this.name = name;//this points to the current obj
        this.id = id;
    }
    greeting(){
        console.log(`Hi my name is ${this.name} with my id:${this.id}`)
    }
}
const trevor = new Student('Trevor', '12345');
const andy = new Student('Andy', '1234563');
console.log(trevor);
trevor.greeting();
console.log(andy);
andy.greeting();

//constructor function
// function Person(){
//     this.name = 'John',
//     this.age = 23,
//     this.greet = function(){
//         console.log('Hi');
//     }
// }
// function Person(person_name, person_age, person_gender){
//     //assigning parameter values to the calling objs
//     this.name = person_name,
//     this.age = person_age,
//     this.gender = person_gender,
//     this.greet = function(){
//         console.log('Hi' + ' ' + this.name);
//     }
// }
// //create objects
// // const person1 = new Person();
// // const person2 = new Person();
// const person1 = new Person('Megan', 30, 'Female');
// const person2 = new Person('Tom', 55, 'Male');
// console.log(person1);
// console.log(person2);