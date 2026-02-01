//Primitive
// note:- These data types are Call by value, when we call it , we get its copy not original data, aur jo bhi changes hote hai vo copy me hote hai original data me nahi hota hai.

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
//____________________________________________________________________________________________

const score = 100  //Type : Number
const scoreValue = 100.3 //Type : Number

const isLoggedIn = false //Boolean
const outsideTemp = null //Null
let userEmail;
//____________________________________________________________________________________________

const id = Symbol('123')  // symbol ek unique data type hai, jiska return type bhi symbol hi hota hai.
const anotherId = Symbol('123')
//console.log(id === anotherId);  //false
//____________________________________________________________________________________________

const bigNumber = 9812658965895241578n  //last me 'n' lagane se bigInt datatype ban jayega, nhi toh Number hi rahega
//console.log(typeof bigNumber);
//____________________________________________________________________________________________

//**Javascript is a Dynamically Type Language. because it defines data types by itself. we don't need to define them.
//____________________________________________________________________________________________

// Referance (Non-Primitive)
// Array, objects, Functions
//____________________________________________________________________________________________

//Array-
const heros = ["Ben10" , "Avengers", "Ironman"]
//____________________________________________________________________________________________

//Objects-
let myobj = {
    name: "Prahant",
    age: 23,

}
//____________________________________________________________________________________________
//Functoin
const myFunction = function(){
    console.log("This is a function");
    
}
console.log(typeof myFunction);  //function
//____________________________________________________________________________________________

console.log(typeof myobj);  //object

console.log(typeof heros);  //object

console.log(typeof bigNumber);  //bigint

console.log(typeof anotherId);  //symbol

console.log(typeof outsideTemp);  //object

console.log(typeof isLoggedIn);  //boolean

console.log(typeof scoreValue);  //number
//____________________________________________________________________________________________
// https://262.ecma-international.org/5.1/#sec-11.4.3