/*Create variables:

let x = null

let y = undefined

let z = 10n
Print their values and typeof for each.
Question to answer:

Why does typeof null give an unexpected result?
*/
let x = null
let y = undefined

let z = 10n
console.log(x,y,z); // o/p null undefined 10n
console.log(typeof x, typeof y, typeof z); // o/p object undefined bigint
//typeof null returns "object" due to a bug in the original JavaScript implementation. It was never fixed to avoid breaking existing web code.

/*
| Value | typeof result |
| ----- | ------------- |
| null  | "object"      |
| {}    | "object"      |
| []    | "object"      |
| ""    | "string"      |
| 0     | "number"      |
 */