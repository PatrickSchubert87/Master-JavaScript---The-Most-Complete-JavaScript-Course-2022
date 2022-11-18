/* ES11 Features 

1) Dynamic import
2) matchAll()
*/
import * as module3 from './module3.js';

async function multiplyFn(num1, num2){
    if(num1 && num2){
        const result = await import('./module3.js');
        console.log(result.multiply(num1,num2));
    }
}

multiplyFn(4,5);