const name= "Prashant"


const repoCount = 22
console.log(name + repoCount + "total");

//string interpolation (backtikk) recommended
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

// Anaother way to write string using new keyword, and its type is object not a String.
const profileName = new String('Prashant') //object
console.log(typeof profileName); 
console.log(profileName);  //[String: 'thedeepocean']
console.log(profileName[0]);  //t


console.log(profileName.__proto__); //[[Prototype]] : String,,this used to check String's functions/method
//ye jakar console par dekho sare methods/functions


//this is a function/method of String
console.log("length", profileName.length);
console.log(profileName.toUpperCase());

console.log(profileName.charAt(2));  
console.log(profileName.indexOf('e'));  

//substring() don't allows negative indexes, it automatically convert it to 0.
const newString = profileName.substring(0,4) // last character include nhi hoga. ex (0,4) hai toh 0,1,2,3 tak hi pring hoga.
console.log(newString);

/*NOte- we can see that all changes are happening into duplicate data, original valuse is not chaning */

//Unlike substring(), slice() allows negative indexes.
const anotherString = profileName.slice(-8,4)
console.log(anotherString);

const newStringone = "   Prashant     "
console.log(newStringone);
console.log(newStringone.trim());  // removes all white space and line terminators from the beginning and end of a string.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://erprashant.tech/prashant%20vishwakarma"
console.log(url.replace('%20','-')); // https://erprashant.tech/prashant-vishwakarma

console.log(url.includes('prashant')); //true //we can check also that this word are exist or not in url

const newName = new String('Prashant-vishwakarma')

console.log(newName.split('-'));
console.log(newName.split('-', 2));//split(separator: value, limit : number) kitna string split karna hai vo define karta hai limit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

//goto docs and read all string methods
// practice more on strings that will help in future