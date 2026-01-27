//there are different outputs for differents types of inputs
/*-----------------------------------------------*/

let score = "55"; // value = 55
//let score = "Prashant"  // value = NaN
// let score = "55abcfdf" // value NaN
// let score = null      // value = 0
// let score = undefined    // value = NaN
// let score = true      // value = 1
/*-----------------------------------------------*/

//we can write it as both type like given below
// console.log(typeof score); //type -1
// console.log(typeof (score)); //type -2
/*-----------------------------------------------*/

let valueInNumber = Number(score); //conversion Syntax
// it will convert the datatype to Number.
//ye number me convert toh kar dega but uski value 'NaN' aayegi(different for different input), but datatype Number hi rahega.
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
/*-----------------------------------------------*/

let isLoggedIn = null
//let isLoggedIn = undefined
let convert = Boolean(isLoggedIn);
// console.log(convert)
/*-----------------------------------------------*/

/*Different outputs for different type of datatype Inputs.*/
/*
null=> false
undefined => false
"" => false
0 => false
"PV" => true
1 => true
2 => true and so on...

Only the following values are false when converted to boolean:
  0
null
undefined
NaN
""     (empty string)
false  (boolean false)
*/
/*-----------------------------------------------*/

let someNumber = 50;
let convertToString = String(someNumber); //convert to String
// console.log(convertToString);
// console.log(typeof convertToString);
/**************************OPERATIONS*****************************/

//goto-> https://tc39.es/ecma262/multipage/abstract-operations.html#sec-abstract-operations
/*----------------------------------------------------------------*/

let value = 3;
let negvalue = -value;
// console.log(negvalue);
/*-----------------------------------------------*/

//Arithmatic Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);
/*-----------------------------------------------*/

let str1 = "hello";
let str2 = " Prashat";
// console.log(str1 + str2);
/*-----------------------------------------------*/

// console.log("1" + 2);     //=> 12
// console.log(1 + "2");     //=> 12
// console.log("1" + "2");    //=> 12
// console.log("1" + 2 + 2);  //=> 122  

/*if String comes first then all values(Number also) will be treated as 'String' and if Number comes first then number will be treated as number first then string treated as String.*/

// console.log(1 + 2 + "2");   //=> 32
// agar Number first me aata hai toh pahle number ki tarah treat karega fir string ko add karega.
/*-----------------------------------------------*/

//"THIS TYPE OF CODE IS NOT RECOMMENDED"
// console.log(true);    // true hi aayega

// console.log(+true);  // 1 aayega

//console.log(true+);  // error aayega

//console.log(+"");    // 0 aayega
/*-----------------------------------------------*/

//not recommended
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
/*-----------------------------------------------*/

//Referance:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
/*-----------------------------------------------*/

/*Increment (++) operator*/
let gameCounter = 100;
console.log(gameCounter); //100

let X = ++gameCounter;  //first add (+1) then store
console.log(X); //101

let Y = gameCounter++; //first store then add (+1)
console.log(Y); //101

console.log(gameCounter); //102
/*-----------------------------------------------*/