/*---------------------------------------------------------------------------------------------- */
//String Data Type
const name= "Prashant" //we can define string like this
const repoCount = 22
console.log(name + repoCount + "total");  //this is wrong type of writing multi variable sentense
/*---------------------------------------------------------------------------------------------- */

//string interpolation (backtick ) Always recommended
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //use this method always for writing multi variable
/*---------------------------------------------------------------------------------------------- */

// Another way to write string using 'new' keyword, and its type is "object" not a "String".
const profileName = new String('Prashant') //defining String as object
console.log(typeof profileName); //object
console.log(profileName);  //[String: 'Prashant']
console.log(profileName[0]);  //P
/*---------------------------------------------------------------------------------------------- */

console.log(profileName.__proto__); //[[Prototype]] : String, 
// this used to check String's functions/method
// ye jakar console par dekho sare methods/functions
/*---------------------------------------------------------------------------------------------- */

console.log("length", profileName.length);//this is a property of string
/*---------------------------------------------------------------------------------------------- */

//this is a function/method of String
console.log(profileName.toUpperCase()); //PRASHANT
console.log(profileName.charAt(2));   //a
console.log(profileName.indexOf('a'));  //2
/*---------------------------------------------------------------------------------------------- */

/*NOte- we can see that all changes are happening into duplicate data, original valuse is not chaning */

//substring() don't allows negative indexes, it automatically convert it to 0.
const newString = profileName.substring(0,4) // last character include nhi hoga. ex (0,4) hai toh 0,1,2,3 tak hi pring hoga.
console.log(newString);
/*---------------------------------------------------------------------------------------------- */

//Unlike substring(), slice() allows negative indexes.
const anotherString = profileName.slice(-8,4)  //o/p- Pras  //count negative index- -8,-7,-6,-5,-4,-3,-2,-1
console.log(anotherString);
/*---------------------------------------------------------------------------------------------- */

const newStringone = "   Prashant     "
console.log(newStringone);
console.log(newStringone.trim());  // removes all white space and line terminators from the beginning and end of a string.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
/*---------------------------------------------------------------------------------------------- */

const url = "https://erprashant.tech/prashant%20vishwakarma"
console.log(url.replace('%20','-')); // https://erprashant.tech/prashant-vishwakarma , it removes the %20 from URL
/*---------------------------------------------------------------------------------------------- */

console.log(url.includes('prashant')); //true //we can check also that this word are exist or not in url
/*---------------------------------------------------------------------------------------------- */
//spliting
const newName = new String('Prashant-vishwakarma-jaunpur-UP-India')
console.log(newName.split('-'));  //there is no limit for spliting
console.log(newName.split('-', 2));//split(separator: value, limit : number) kitna string split karna hai vo define karta hai limit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
/*---------------------------------------------------------------------------------------------- */

//goto docs and read all string methods
// practice more on strings that will help in future
/*---------------------------------------------------------------------------------------------- */