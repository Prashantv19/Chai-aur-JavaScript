/*
Create variables:

let a = "123xyz";
let b = "   200   ";
let c = true;

Convert each into a number using Number(). Print the result and data type.
Questions to answer:

Which conversions give NaN?  => let a = "123abc"

Which conversion trims spaces?   => let b = "   200    "

Concepts touched: string-to-number conversion, whitespace handling, boolean conversion, NaN behavior
*/

let a = "123abc"
let b = "   200    "
let c = true

let convertA = Number(a)
console.log(`After Conversion: ${convertA}`);
console.log(typeof convertA);

let convertB = Number(b)
console.log(`After Conversion: ${convertB}`);
console.log(typeof convertB);

let convertC = Number(c)
console.log(`After Conversion: ${convertC}`);
console.log(typeof convertC);
