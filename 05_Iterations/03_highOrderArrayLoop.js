//for of loop
//using Array
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}
//Using String
const greeting = "Hello Prashant"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);

    
}
//note: practice break and continue key word here

//Maps
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

//order remain same
//value remain unique, no duplicate value existed

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of America")
map.set('Fr', "France")
map.set('Ge', "Germani")

map.set('Ge', "Germani") //this will not add.

console.log(map);

for (const key of map) {   //it gives an array
    console.log(key);
    
}

//trick- key and value dono ko array me likhenge, then o/p array me nhi aayega
for (const [key, value] of map) {   //it gives  (IN :- India) like data
    console.log(key, ":-" , value);  
}

const myObj = { //TypeError: myObj is not iterable
    game1: 'PUBG',
    game2: 'freefire'
}
for (const [key, value] of myObj) {
    
}