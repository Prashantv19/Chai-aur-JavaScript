/*For Loop */

// for(initialize variable; condition check; index++){print statement}

//Shortcut - (CTRL+D after double click on any word) for multicorsur

//--------------------------------------------------------------

for (let i = 0; i <=10; i++) {
    const element = i;
    // console.log(element);
}

// console.log(element);   //ReferenceError: element is not defined,and it should be, because it is define in block scope not globle scope.
// console.log(i);   //ReferenceError: i is not defined

//--------------------------------------------------------------

//including control flows into loops
for (let i = 0; i <=10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is my lucky no."); //pahle ye print hoga 
    }
    // console.log(element);  //then ye
}
//--------------------------------------------------------------
//nested loop
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    // console.log(`Table of: ${i}`);
    
    for (let j = 1; j <=10; j++) {
    // console.log(`inner loop value: ${j} and inner loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}
//--------------------------------------------------------------

let myArray = ["Ironman", "Thor", "Spiderman","Capton"]
// console.log(myArray.length); 
//kyoki Array ki indexing 0 se start hoti hai and arrray ki length 1 se count hoti hai, isiliye = nhi lagayenge warna 'unefined' aayega

for (let i = 0; i < myArray.length; i++) {
    const heros = myArray[i];
    // console.log(heros);
    
}
//--------------------------------------------------------------

//break and 

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
    
    
}console.log("break ke baad sidhe loop ke bahar aa gya");
//--------------------------------------------------------------

//continue

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue  //ek baar ke liye next statement print nhi karenge uske baad as it is continue karenge
    }
    console.log(`value of i is ${index}`); //iss statement ko ek baar avoid karega
    
    
}console.log("break ke baad sidhe loop ke bahar aa gya");
