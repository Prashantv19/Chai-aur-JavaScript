/*==============================================================================================*/
/*                                        STRING DATATYPES                                      */
/*==============================================================================================*/

/*---------------------------------------------------------------------------------------------- */
// String Data Type
const name = "Prashant"; // we can define string like this
const repoCount = 22;

// ❌ this is wrong type of writing multi variable sentence
console.log(name + repoCount + "total");
/*---------------------------------------------------------------------------------------------- */


/*==============================================================================================*/
/*                          STRING INTERPOLATION (RECOMMENDED WAY)                              */
/*==============================================================================================*/

// ✅ String interpolation (backtick) — Always recommended
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// use this method always for writing multi variable
/*---------------------------------------------------------------------------------------------- */


/*==============================================================================================*/
/*                        STRING OBJECT VS STRING PRIMITIVE                                     */
/*==============================================================================================*/

// Another way to write string using 'new' keyword,
// and its type is "object" not a "primitive String".
const profileName = new String('Prashant'); // defining String as object

console.log(typeof profileName);   // object
console.log(profileName);          // [String: 'Prashant']
console.log(profileName[0]);       // P
/*---------------------------------------------------------------------------------------------- */


/*==============================================================================================*/
/*                           STRING PROTOTYPE & METHODS                                         */
/*==============================================================================================*/

console.log(profileName.__proto__); 
// [[Prototype]] : String
// this is used to check String's functions/methods
// ye jakar console par dekho sare methods/functions
/*---------------------------------------------------------------------------------------------- */


console.log("length", profileName.length); 
// this is a property of string
/*---------------------------------------------------------------------------------------------- */


// these are functions/methods of String
console.log(profileName.toUpperCase()); // PRASHANT
console.log(profileName.charAt(2));     // a
console.log(profileName.indexOf('a'));  // 2
/*---------------------------------------------------------------------------------------------- */


/*==============================================================================================*/
/*                         STRING IMMUTABILITY (stack CONCEPT)                              */
/*==============================================================================================*/

/* NOTE:
   we can see that all changes are happening into duplicate data,
   original value is not changing(stack concept)
*/


/*==============================================================================================*/
/*                       SUBSTRING vs SLICE (STRING EXTRACTION)                                 */
/*==============================================================================================*/

// substring() doesn't allow negative indexes,treated them as 0.
const newString = profileName.substring(0, 4);
// last character include nahi hota
// (0,4) => index 0,1,2,3
console.log(newString);
/*---------------------------------------------------------------------------------------------- */


// Unlike substring(), slice() allows negative indexes.
const anotherString = profileName.slice(-8, 4);
// output => Pras
// negative index count => -8,-7,-6,-5,-4,-3,-2,-1
console.log(anotherString);
/*---------------------------------------------------------------------------------------------- */


/*==============================================================================================*/
/*                             STRING WHITESPACE HANDLING                                       */
/*==============================================================================================*/

const newStringOne = "   Prashant     ";
console.log(newStringOne);
console.log(newStringOne.trim());
// removes all white space and line terminators
// from the beginning and end of a string.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
/*---------------------------------------------------------------------------------------------- */


/*==============================================================================================*/
/*                              STRING REPLACEMENT & SEARCH                                     */
/*==============================================================================================*/

const url = "https://erprashant.tech/prashant%20vishwakarma";
console.log(url.replace('%20', '-')); // it removes %20 from URL
// https://erprashant.tech/prashant-vishwakarma

/*---------------------------------------------------------------------------------------------- */


console.log(url.includes('prashant')); // true
// we can check whether the word exists or not
/*---------------------------------------------------------------------------------------------- */


/*==============================================================================================*/
/*                                   STRING SPLITTING                                           */
/*==============================================================================================*/

// splitting
const newName = new String('Prashant-vishwakarma-jaunpur-UP-India');

console.log(newName.split('-'));      

console.log(newName.split('-', 2));
// split(separator: value, limit: number)
// limit defines how many splits are allowed
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
/*---------------------------------------------------------------------------------------------- */


/*==============================================================================================*/
/*                                   PRACTICE & REFERENCES                                      */
/*==============================================================================================*/

// go to docs and read all string methods
// practice more on strings — it will help in future
/*---------------------------------------------------------------------------------------------- */
