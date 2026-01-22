console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);// problem starts here due to different data types
console.log("02" > 1);
//iss tarah ke conversions ko hamesha avoid karna chahiye.
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0);  // true
//the reason is that an equality check == and somparision > < >= <= woek differently. comparision converts (3)null >=0 is true and null > 0 is false.
//the second one is false because it(==) does not convert null to 0
console.log("2" === 2); //strictly checks datatype also
