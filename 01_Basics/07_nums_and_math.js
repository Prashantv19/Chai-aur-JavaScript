const score = 400
// console.log(score);

const balance = new Number(100)  //A method to define Number intentionally
// console.log(balance);  //[Number: 100]

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //100.00 (two digit after decimal)


const otherNumber = 25.8966 //25.9
// const otherNumber = 125.8966  //126
// const otherNumber = 1125.8966   //1.13e+3  means: 1.13 × 10³

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000

// console.log(hundreds.toLocaleString());  //10,00,000 This automatically uses indian numeric system, we don't need to define (en-IN)
// console.log(hundreds.toLocaleString('en-IN'));  //10,00,000
// console.log(hundreds.toLocaleString('en-US')); //1,000,000


//console par number ki properties padhna hai



//------------------------------Math--------------------------------------

// console.log(Math); //Object [Math] {}

// console.log(Math.abs(-4)); //4 
// console.log(Math.abs(4)); //4

// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.sqrt(9));  //squar root -> 3
// console.log(Math.pow(5,2)); //25
// console.log(Math.min(2,3,4,5,6,78)); // 2
// console.log(Math.max(2,3,4,5,6,78)); //78

//it generates random integers from 0 to 1. ex- 0.1,0.4, 0.99 etc, 1 will never come
console.log(Math.random());

//using this, the number will become 1 or more than 1
console.log(Math.random()*10+1);

//floor is used to round off the value to its lowest value not highest
console.log(Math.floor(Math.random()*10) +1); //

const min = 1
const max = 6

//(max-min+1)Represents the size of the desired integer range.
console.log(Math.floor(Math.random()*(max-min+1)));

//'min' is used to get atleast minimum value
console.log(Math.floor(Math.random()*(max-min+1)) +min);

// console.log((max-min+1));

