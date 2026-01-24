/*Task:
Create a variable: let value = "0".
Convert it to boolean using Boolean().
Print:

original value
converted value
typeof of both

Compare original and converted values using == and === and print results.

Expected Concepts:

Truthy and falsy conversion
Boolean type conversion
Equality differences 
*/

let value = "0"  // if we take number 0 then it will convert as false
let boolValue = Boolean(value)

console.log("original:",value); // O/P original: 0

console.log("converted:",boolValue);  // O/P converted: true, because String willl always converted into 'true'.

console.log(typeof value, typeof boolValue);  //O/P string boolean



