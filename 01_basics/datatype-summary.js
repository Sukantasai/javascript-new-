// Primitive 

// 7 types : String, Number, Boolean, BigInt, symbol, Null, Undefined

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);


// Reference
// 3types : Object, Array, Function
const heros = ["Iron Man", "Thor", "Hulk"];
let myObj = {
    name: "Sukanta",
    age : 22,
}
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof score); // number