// Nested function scope || Lexical scoping (Looks to the inner most function and moves outer to the global most scope)

/*let a = 10;

function outer(){
   let b = 20;
   function inner(){
        let c = 30;
        console.log(a,b,c);
   }
   inner();
}

outer();
*/

// Closure

function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter)
    }
    return inner
}
//const fn = outer();
//fn();
//fn();

// Function currying

function sum(a,b,c){
    return a + b + c
}

console.log(sum(2,3,5));

function curry(fn){ // takes function
    return function(a){ // curry function returns a=2
        return function(b){ // function(a=2) returns function(b=3) 
            return function(c){// function(b=3) return function(c=5)
                return fn(a,b,c) // function(c=5) returns function(fn) with a=2,b=3,c=5
            }
        }
    }
}

// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5));


// function sayMyName(name){
//     console.log(`My name is ${name}`);
// }

// sayMyName('Walter White');
// sayMyName('Heisenberg')


// IMPLICIT BINDING OF this KEYWORD

// const person = {
//     name: 'Vishawas',
//     sayMyName: function (){
//         console.log(`My name is ${this.name}`);
//     }
// }


//person.sayMyName()

// EXPLICIT BINDING OF this KEYWORD

// const name = 'Superman'
globalThis.name = 'Superman'
 function sayMyName(){
    console.log(`My name is ${this.name}`);
}

//sayMyName.call(person)


// NEW BINDING OF this KEYWORD

// function Person(name){
//         // this = {} || new empty object
//     this.name = name
// }

// const p1 = new Person('Vishwas');
// const p2 = new Person('Batman');

// console.log(p1.name,p2.name);


// sayMyName()

// PROTOTYPING

// function Person(fName,lName){
//     this.fName = fName
//     this.lName = lName
// }

// Person.prototype.getFullName = function(){
//     return this.fName + ' ' + this.lName
// }

// function SuperHero(fName,lName){
//     // this = {}
//     Person.call(this,fName,lName)
//     this.isSuperHero = true
// }

// SuperHero.prototype.fightCrime = function(){
//     console.log("Fighting crime")
// }

// SuperHero.prototype = Object.create(Person.prototype)

// const batman = new SuperHero('Bruce','Wayne')

// console.log(batman.getFullName())

// SuperHero.prototype.constructor = SuperHero


// const p1 = new Person('Bruce','Wayne'); // Constructor function
// const p2 = new Person('Clark','Kent');


// console.log(p1.getFullName())
// console.log(p2.getFullName())

// CLASSES

// class Person{
//     constructor(fName,lName){
//         this.fName = fName
//         this.lName = lName
//     }

//     sayMyName(){
//         return this.fName + ' ' + this.lName
//     }

// }

// const classP1 = new Person('Bruce','Wayne')
// console.log(classP1.sayMyName())

// class SuperHero extends Person{
//     constructor(fName,lName){
//         super(fName,lName)
//         this.isSuperHero = true
//     }
//     fightCrime(){
//         console.log("Fighting crime")
//     }
// }

// const batman = new SuperHero('Bruce','Wayne')

// console.log(batman.sayMyName())

// ITERABLES | ITERATOR

// const obj = {
//     [Symbol.iterator]: function (){
//         let step = 0
//         const iterator = {
//             next: function(){
//                 step++
//                 if(step === 1){
//                     return {value:'Hello',done:false}
//                 }else if (step === 2){
//                     return {value:'World',done:false}
//                 }
//                 return {value: undefined, done:true}
//             }
//         }
//         return iterator
//     }
// }

// for (const word of obj){
//     console.log(word)
// }

// GENERATORS

// function normalFunction(){ // will not stop until the last line if executed
//     console.log("Hello")
//     console.log("World")
// }

// normalFunction()

// function* generatorFunction(){
//     yield 'Hello'
//     yield 'World'
// }

// const generatorObject = generatorFunction()

// for(const word of generatorObject){
//     console.log(word)
// }