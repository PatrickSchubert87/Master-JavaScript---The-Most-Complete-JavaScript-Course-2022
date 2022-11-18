//JAVASCRIPT CLASS INHERITANCE

//THIS IS CLASS CAR
class Car {
    constructor(carBrand) {
      this.carBrand = carBrand;
    }
    myCar() {
      return `I have a ${this.carBrand}`;
    }
  }
  //THIS IS CLASS CALLED MODEL THAT INHERITS THE METHODS FROM THE CLASS CAR
  class Model extends Car {
    constructor(carBrand, model) {
      super(carBrand);
      this.model = model;
    }
    show() {
      return `${this.myCar()} and it is this model: ${this.model}`;
    }
  }

  const myCar = new Model("Ford", "Mustang");
  console.log(myCar.show());
  /*
The extends keyword is used to create a child class 
of another class (parent).
In our case the child class is Model and 
parent class is Car.

The child class inherits all the methods from 
the parent class,
so myCar will be accessible inside the Model class.

Inheritance is useful for code reusability: 
1) Reuse properties and methods of an existing 
class when you create a new class.

Note: From the example above; 
The super() method refers to the parent class or Car class.
and constructor is called immediately after each 
class is instantiated.
 ex:   const myCar = new Model("Ford", "Mustang");
By calling the super() method in the constructor method,
 we call the
parent's constructor method and gets access to 
the parent's properties and methods.
*/