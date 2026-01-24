/*Task:
Write a small script that:

Accepts three values:

age as number

name as string

isStudent as string containing "true" or "false"

Convert isStudent into a boolean.

Print final sentence:
"John is 21 years old and student status is true"
(Values depend on input)

Also log the data types of age, name, and isStudent(after conversion).

Use comparison operator to check:

if age >= 18, print "Adult"

else print "Minor"
 */

let age = 21
const name = "Raman"
let isStudent = "false"

let boolString = Boolean(isStudent)

console.log(name, "is" , age, "year old and strudent status is", boolString  );

console.log("Type of age:", typeof age);
console.log("Type of name:", typeof name);
console.log("Type of isStudent:", typeof isStudent);

if (age>=22) {
    console.log("Adult");
    
} else {
    console.log("Minor");
    
}


/* Note: 1
1. Why Boolean("false") becomes true

In JavaScript:
Boolean("false")   // true
Boolean("true")    // true
Boolean("Raman")   // true
Boolean("0")       // true
 */

/*Note: 2
Only the following values are false when converted to boolean:
0
null
undefined
NaN
""    (empty string)
false (boolean false)
 */

/*NOte: 3
Correct Way to Convert "true"/"false" String to Boolean

If your input is literally "true" or "false" as strings, convert like this:
isStudent = (isStudent === "true");
 */