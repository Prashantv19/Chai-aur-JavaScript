let p = 0;
let q = "0";
let r = false;

console.log(typeof p);
console.log(typeof q);
console.log(typeof r);



console.log(p == q);
console.log(q == r);
console.log(r == false);

console.log(p === q);
console.log(q === r);
console.log(r === false);

//Why do some values equal with == but not with ===?
/*
some values are equal with == because == checks only its value not type, so that some value are not equal with ===.
*/