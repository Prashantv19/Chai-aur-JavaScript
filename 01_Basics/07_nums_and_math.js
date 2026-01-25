const score = 400
console.log(score);

const balance = new Number(100)  //A method to define Number intentionally
console.log(balance);  //[Number: 100]

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //100.00 (two digit after decimal)


const otherNumber = 25.8966 //25.9
// const otherNumber = 125.8966  //126
// const otherNumber = 1125.8966   //1.13e+3  means: 1.13 × 10³

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000

console.log(hundreds.toLocaleString());  //10,00,000 This automatically uses indian numeric system, we don't need to define (en-IN)
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000
console.log(hundreds.toLocaleString('en-US')); //1,000,000


//console par number ki properties padhna hai
