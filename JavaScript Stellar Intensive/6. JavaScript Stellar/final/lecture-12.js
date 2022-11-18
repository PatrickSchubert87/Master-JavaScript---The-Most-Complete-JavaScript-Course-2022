/*
ES11 or ECMAScript 2020 Features

1) BigInt
2) Nullish Coalescing Operator  ?? -- null/undefined
3) Optional Chaining ?.
4) Private Class Variable
5) Promise.allSetlled
6) GlobalThis
*/

//1) BigInt
const maxNumber = Number.MAX_SAFE_INTEGER;//9007199254740991
// pow(2,53) -1
console.log('max intger limit',maxNumber);

const firstNumber = maxNumber + 1;
const secondNumber = maxNumber + 2; 

console.log('firstNumber', firstNumber);
console.log('firstNumber', secondNumber);

const BigInteger = BigInt(Number.MAX_SAFE_INTEGER);
console.log('Big Integer',BigInteger);

console.log('BigInt + 1',BigInteger + BigInt(1));
console.log('BigInt + 2',BigInteger + BigInt(2));

//2) Nullish Coalescing Operator  ?? -- null/undefined

// Logical Or Operator returns the left-hand value if true else
//returns the right value
console.log('0 || 5 =>', 0 || 5 );
console.log(" '' || 'Rick' =>", '' || 'Rick' );
console.log(" 'Rick' || 'Andy' =>", 'Rick' || 'Andy' );

//?? returns a left-hand value when the value is not null or
//undefined, else returns right side value

console.log('0 ?? 5 =>', 0 ?? 5 );
console.log(" '' ?? 5 =>", '' ?? 5 );
console.log(" null ?? 5 =>", null ?? 5 );
console.log(" undefined ?? 5 =>", undefined ?? 5 );

//combinatiopn of || and ??
console.log(('Rick' || false) ?? 'Sekuloski');

//3) Optional Chaning

const person = {
    name: 'Rick',
    developer: true,
    courses:{
        twoCourses: {
            webDev: true
        }
    }
}

// if(person && person.courses && person.courses.twoCourses){
//     console.log(person.courses.twoCourses.webDev);
// }

console.log(person ?. courses ?. twoCourses ?. webDev);

//4) Private Class Variable

class Person {
    #myName = 'Rick';

    getDetails(){
        return this.#myName;
    }
}

const rick = new Person();
console.log(rick.getDetails());//Rick
//console.log(rick.#myName);Throw Error


//5) Promise.allSettled

const promise1 = new Promise((res,rej) =>{
    setTimeout(()=>{
        res('Success');
    },2000)
});
const promise2 = new Promise((res,rej) =>{
    setTimeout(()=>{
        rej('Failed');
    },5000)
});

Promise.allSettled([promise1,promise2])
.then(data => console.log(data));

//globalThis
console.log(window);
console.log(globalThis === window);

//In Webworker
//globalThis === self
//Node
//globalThis === global