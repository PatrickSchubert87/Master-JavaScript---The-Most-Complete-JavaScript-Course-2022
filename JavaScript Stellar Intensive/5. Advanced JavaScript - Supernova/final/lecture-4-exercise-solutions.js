//1) DO THE FOLLOWING EVALUATION
//YOU CAN USE CONSOLE.LOG OR THE BROWSER
const firstArray = [1,2,3];
const secondArray = [1,2,3];
const obj1 = {};
const obj2 = {};
//EVALUATE
firstArray === secondArray;//false
//EVALUATE
obj1 === obj2;//false

//2 WHAT ARE THE VALUES OF EACH OBJECT 
const obj3 = { x: 3};
const obj4 = obj3;
const obj5 = obj4;
const obj6 = { x: 4};
//EXAMPLE value of obj3.x
//1) 3 
//2) 3
//3) 3
//4) 4

//3)Set the value of the x for object3 to be 7
obj3.x = 7;
//1) 7 
//2) 7
//3) 7
//4) 4

/*THIS IS ANIMAL CLASS, THE CLASS HAS ITS OWN CONSTRUCTOR
THAT IS SETTING THE NAME,
ALSO THE CLASS ANIMAL HAS THREE METHODS INSIDE
*/
class Animal {
    constructor(name) {
      this.name = name;
    }
    setSpeed(speed){
        this.speed = speed;
    }
    run() {
      console.log(`${this.name} runs with speed ${this.speed} km/h.`);
    }
    stop() {
      this.speed = 0;
      console.log(`Stop running ${this.name}, you need to stands still and your speed needs to ${this.speed}.`);
    }
  }
  /*CREATING INSTANCE OF THE ANIMAL CLASS WITH KEYWORD NEW */
  let animal = new Animal("Animal");
  console.log(animal);
/*And we would like to create another class Rabbit.

As rabbits are animals, Rabbit class should be based on Animal class
so this class must have access to all of the animal methods/

The syntax to extend another class is: Child extends Parent Class.
1) So you need to create class Rabbit that inherits from Animal:
2) Need to add another property for the Rabbit and that is number of legs
3) Object of Rabbit class needs another method called hide
this method will use the name that was set in the parent class
and and say for example: "The White Rabbit has 4 legs but now wants to hide!"
So the output should be something like this
Animal {name: "Animal"}
The White Rabbit runs with speed 5 km/h.
TThe White Rabbit has 4 legs but now wants to hide!!


  let rabbit = new Rabbit("The White Rabbit",4);
  rabbit.setSpeed(5);
  rabbit.run();
  rabbit.hide();
*/
  class Rabbit extends Animal {
    constructor(name, legs){
        super(name);
        this.legs = legs;
    }  
    hide() {
        console.log(`${this.name} has ${this.legs} legs but now wants to hide!`);
    }
    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
      }
  }
  
  let rabbit = new Rabbit("The White Rabbit",4);
  rabbit.setSpeed(5);
  rabbit.run();
  rabbit.stop();
  
  
/*Bonus
Overriding a method
What is JavaScript Method Overriding. 
By default, all methods that are not specified in class Rabbit are taken directly “as is” from class Animal.
But if we want to specify stop method in Rabbit so this method will be used instead. Now if you
want to override a method you need to use the same method name as in the parent Animal class
So add this below hide method in Rabbit class
stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
and replace 
  let rabbit = new Rabbit("The White Rabbit",4);
  rabbit.setSpeed(5);
  rabbit.run();
  rabbit.hide();
  
  With:

  let rabbit = new Rabbit("The White Rabbit",4);
  rabbit.setSpeed(5);
  rabbit.run();
  rabbit.stop();
*/