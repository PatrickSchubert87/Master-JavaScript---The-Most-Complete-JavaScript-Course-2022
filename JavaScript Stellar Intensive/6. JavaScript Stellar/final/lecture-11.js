//import module file

//Importing Named Exports
//import {fullName as f, getName as g} from './module1.js';
// import {fullName} from './module1.js';
// import {getName} from './module1.js';
import * as module1 from './module1.js';
//Importing Default Exports
import actorName, {name} from './module2.js';

// console.log('Full Name', fullName);
// console.log('Get Name', getName());
console.log('Module1: Full Name', module1.fullName );
console.log('Module1: Get Name', module1.getName());
module1.setName('Rick Sekuloski');
console.log('Module1: Get Name', module1.getName());


console.log('Module 2: Actor Name ',actorName.getName());
console.log('Module 2: Name ',name);
actorName.setName('Chris Hemsworth');
console.log('Module 2: Actor Name ',actorName.getName());


