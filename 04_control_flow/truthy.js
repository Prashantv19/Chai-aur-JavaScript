//Truthy Value - hum maan lete hai ki ye true value hai.
//Falsy Value - hum man lete hai ki ye False value hai

// const userEmail = "prashant@gmail.com"  //Got User Email, because hum man lete hai ki true hai

// const userEmail = ""            //dont have User Email, because hum man lete hai ki false hai

//but
const userEmail = []         //Got User Email, just because [] comes under truthy values thats why its happening
 
if (userEmail) {
    console.log("Got User Email");
    
}else{
    console.log("dont have User Email");
}
//--------------------------------------------------------------

/*falsy values */
/* 
false
0
-0
BigInt(0n)
""
null
undefined
NaN
*/
//--------------------------------------------------------------

/*Truthy values*/
/*
"0"
'false', "false"
" "
[]
{}
function(){}
*/
//--------------------------------------------------------------

// how to check empty array
if (userEmail.length === 0) {
    console.log("Array is empty");
}
//--------------------------------------------------------------

// how to check empty Object

const obj ={}

if (Object.keys(obj).length === 0) {
    console.log("Obj is empty");
}
// Object.keys(obj) -> it returns an empty Array

//--------------------------------------------------------------

// Nullish Coalescing Operator (??): null, undefined
/*
?? returns the right-hand value only if the left-hand value is 'null' or 'undefined'.
*/
//---------------------------

// Works Only for Null / Undefined
/*
null ?? "A"        → "A"
undefined ?? "A"   → "A"
*/
//---------------------------

// But:
/*
0 ?? "A"        → 0
"" ?? "A"       → ""
false ?? "A"    → false
*/
//---------------------------

let val1
// val1 = 5??10   //5
// val1 = null ?? 10   //10
// val1 = undefined ?? 15   //15


val1 = null ?? 10 ?? 20   //10     
// console.log(val1);

//--------------------------------------------------------------

//ternary  operator
//Syntax-> condition ? true : false

const tesPrice = 100
tesPrice <=80 ? console.log("less than 80") : console.log("more than 80")

