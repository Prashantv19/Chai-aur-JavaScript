// if

// if(3!=2){
//     console.log("this line of code will run, because condition is true");
// }

// if(3=2){
//     console.log("this line of code will not run, because condition is false");
// }

// const isUserloggedIn = true   //ye toh hamesha true hi rahega

//--------------------------------------------------------------
//if-else
// const temperature = 39
// if ( temperature === 40 ){   //O/P-> //Not-Equal to 40
//     console.log("Equal to 40");
// } else {
//     console.log("Not-Equal to 40");
// }
//--------------------------------------------------------------

// console.log("Execute");
//--------------------------------------------------------------

//comparision operators  
// <, >, <=, >=, ==, !=, ===, !==
//--------------------------------------------------------------

// const score = 200

// if (score > 100) {
//     var power = "fly"  //this is global scope variable, it can be accessed
//     let power = "fly"  // but this is not
//     console.log(`User power: ${power}`); //User Power: fly 
// }

// console.log(`User power: ${power}`);  //Error: power is not defind, because it is executing out of scope.
//--------------------------------------------------------------

const balance = 1000
// implicite scope- ye man leta hai ki ye scope ke ander hai. isme hum ek sath multiple line likha sakte hai.

// if (balance > 500) console.log("test") //it is okey but
// if (balance > 500) console.log("test"),console.log("test2"); //it is not recommended

//--------------------------------------------------------------

//nested if-else if-else if-if
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// }
//--------------------------------------------------------------
// real life senarios using Logical operators
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//Logical operators
//AND - Both(all) condition should be true
//OR - Atleast one condition should be true
if (userLoggedIn && debitCard && 2==3) {
    // console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    // console.log("User logged in");
}
//--------------------------------------------------------------