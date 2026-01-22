//ye one by one alag alag chijo ke liye hai

  let score = "55"       // value = 55
//let score = "Prashant"  // value = NaN
// let score = "55abcfdf" // value NaN
// let score = null      // value = 0
// let score = undefined    // value = NaN
// let score = true      // value = 1

// console.log(typeof score);  // it will show String datatype
// console.log(typeof (score)); // it will show String datatype

let valueInNumber = Number(score)  // it will convert the datatype to  Number.
//ye number me convert toh kar dega but uski value NaN aayegi, but type Number hi rahega.

// console.log(typeof valueInNumber);

// console.log(valueInNumber);


// let isLoggedIn = null
let isLoggedIn = undefined
 let convert = Boolean(isLoggedIn)
 // console.log(convert)

  // null=> false
  // undefined => false
  // "" => false
  // 0 => false
  // "PV" => true
  // 1 => true
  // 2 => true and so on...
  
let someNumber = 50

let convertToString = String(someNumber)

// console.log(convertToString);
// console.log(typeof convertToString);

//**************************Operations*****************************
//goto tc39.es and => 7. Abstract operations

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "hello"
let str2 = " Prashat"
// console.log(str1 + str2);

// console.log("1" + 2);     //=> 12
// console.log(1 + "2");     //=> 12
// console.log("1" + "2");    //=> 12
// console.log("1" + 2 + 2);  //=> 122  agar string first me aata hai toh sabko string ki tarah treat karega.
// console.log(1 + 2 + "2");   //=> 32 agar Number first me aata hai toh pahle number ki tarah treat karega fir string ko add karega.

//** sabse kharab code likhane ka tarike**
// console.log(true);    // true hi aayega

// console.log(+true);  // 1 aayega    

//console.log(true+);  // error aayega

//console.log(+"");    // 0 aayega

let num1, num2, num3
num1 = num2 = num3 = 2+2

//Referance:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let gameCounter =100
++gameCounter   
console.log(gameCounter);
gameCounter++
console.log(gameCounter);



