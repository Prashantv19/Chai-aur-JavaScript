/*Numbers*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
//_____________________________________________________________

255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)

/*Defining a simple Number */
const score = 400  
// console.log(score);
//_____________________________________________________________

//An another method to define Number intentionally
const balance = new Number(100)  
// console.log(balance);  //[Number: 100]

//methods and Properties
// console.log(balance.toString());  //100
// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(2)); //100.00 (show only two digit after decimal and accordingally)
//_____________________________________________________________

const otherNumber = 25.8966 //25.9
// const otherNumber = 125.8966  //126
// const otherNumber = 1125.8966   //1.13e+3  means: 1.13 × 10³

// console.log(otherNumber.toPrecision(3)); //Here it will start from first digit before decimal and digits will rounded off both before and after decimal. 
//_____________________________________________________________

const hundreds = 1000000

// console.log(hundreds.toLocaleString());  //10,00,000 My System automatically uses indian numeric system, we don't need to define (en-IN)
// console.log(hundreds.toLocaleString('en-IN'));  //10,00,000
// console.log(hundreds.toLocaleString('en-US')); //1,000,000
//_____________________________________________________________

//console par number ki properties padhna hai
// const hundreds = 1000000
// hundreds
//_____________________________________________________________

// When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.

Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN


//------------------------------Math--------------------------------------
/*NOTE:-*/
/*
✅ It represents the built-in JavaScript Math object
✅ It is not something you create — it is already available globally, built-in by the JavaScript engine
✅ “Provides basic mathematics functionality and constants” 
❌ You don’t use new Math() ❌ NOT allowed*/
console.log(Math); // → Object [Math] {}
console.log(typeof Math); //Object
//_____________________________________________________________

/*Math Functions (operations) */

// console.log(Math.abs(-4)); //4 
// console.log(Math.abs(4)); //4
//_____________________________________________________________

// Round Up ↑ 
// console.log(Math.ceil(4.2)); // still upward direction // o/p-> 5 
// Round Down ↓
// console.log(Math.floor(4.9)); // downward direction // o/p-> 4
//_____________________________________________________________

// nearest integer
// console.log(Math.round(4.6)); //5
//_____________________________________________________________

// Returns the square root of a number
// console.log(Math.sqrt(9));  //squar root -> 3
//_____________________________________________________________

// Raises a number to a power
// Syntax-> Math.pow(base, exponent)
// console.log(Math.pow(5,2)); //25

// Modern shortcut (recommended now):
    console.log(5 ** 2); // → 25
//_____________________________________________________________

//Find minimum value
// console.log(Math.min(2,3,4,5,6,78)); // 2
//Find Maximum value
// console.log(Math.max(2,3,4,5,6,78)); //78

//_____________________________________________________________

//it generates random integers from 0 to 1. ex- 0.1,0.4, 0.99 etc, 1 never comes
// console.log(Math.random());

//using this, the number will become 1 or more than 1
// console.log(Math.random()*10 +1);

//floor is used to round off the value to its lowest value.
// console.log(Math.floor(Math.random()*10) +1); //
//_____________________________________________________________

const min = 1
const max = 6

//(max-min+1)Represents the size of the desired integer range.
// console.log(Math.floor(Math.random()*(max-min+1)));

//'min' is used to get atleast minimum value, if (max-min+1) ki valuse 0 aati hai tab bhi atleast (+min) value toh aayegi hi.
// console.log(Math.floor(Math.random()*(max-min+1)) +min);

// console.log((max-min+1));
//_____________________________________________________________

/*Math Constants (fixed values) */ 
Math.PI       // 3.1415926535...
Math.E        // Euler number
Math.SQRT2    // √2