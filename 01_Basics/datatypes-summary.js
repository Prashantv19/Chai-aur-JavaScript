//Primitive
// note:- These data types are Call by value, when we call it , we get its copy not original value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100  //Type : Number
const scoreValue = 100.3 //Type : Number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //false

const bigNumber = 9812658965895241578n  //last me 'n' lagane se bigInt datatype ban jayega, nhi toh Number hi rahega
console.log(typeof bigNumber);


//*Javascript is a Dynamically Type Language.


// Referance (Non-Primitive)

//Array, objects, Functions