// if
// if(3!=2){
//     console.log("this line of code will run, because condition is true");
// }

// if(3=2){
//     console.log("this line of code will not run, because condition is false");
// }
// const isUserloggedIn = true
// const temperature = 41
//--------------------------------------------------------------

// if ( temperature === 40 ){   //O/P-> //temperature is greater than 50
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
//--------------------------------------------------------------

// console.log("Execute");
//--------------------------------------------------------------

//comparision operators  
// <, >, <=, >=, ==, !=, ===, !==
//--------------------------------------------------------------

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     var power = "fly"  //this is global scope variable
//     console.log(`User power: ${power}`); //User Power: fly 
// }

// console.log(`User power: ${power}`);  //Error: power is not defind, because it is executing out of scope.

 

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}