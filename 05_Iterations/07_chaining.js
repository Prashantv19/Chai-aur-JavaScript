const myNumbers = [ 2,4,6,7,9,1,10,12]

// const newNums = myNumbers.map( (num)=> {
//     return num +10
// })
// console.log(newNums);
//try this using foreach
/*------------------------------------------------------------*/
//Chaining- multiple function ek sath laga sakte hai..
//Jab bhi chaing hoti hai toh jo bhi first chain ka result hota hai vo secomd chain me pass ho jata hai, that means jo bhi second chain hoga vo apne se pahle wale chain value as a input lega
const newChain = myNumbers
.map( (num) => num *10) 
.map( (num) =>num + 1)
.filter( (num) => num >= 40)
console.log(newChain);
// note:- 'Map' hamesha value return karega but in 'Filter', when condition will be true then it will return otherwise gives empty array.

