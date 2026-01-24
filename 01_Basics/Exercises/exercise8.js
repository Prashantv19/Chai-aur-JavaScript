/*Create two symbols with the same description:

let s1 = Symbol("id");
let s2 = Symbol("id");


Compare s1 and s2 using:

==

===
Print results.

Questions to answer:

Why do symbols never equal even if description matches?
=> because 
What is the type of a symbol?  ==> symbol

Concepts touched: symbols, equality, typeof, uniqueness property
 */

let s1 = Symbol("id")
let s2 = Symbol("id")

console.log(s1 == s2);   //false
console.log(s1 === s2);  //false
console.log(typeof s1, typeof s2);

