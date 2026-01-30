//singleton-  jab constructor se obj banate hai tab singleton object banata hai
//object.create - this is constructor method

//Object banane ke 2 methods hai- 1st -- with literals, 2nd is with constructor



// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Prashant", //name(means all keys) is as string in the backend side
    "full name" : "Prashant Vishwakarma",
    
    [mySym]:"myKey1", //Use [] to define it as Symbol.

    age: 22,
    location: "JNP",
    email: "prashantv1902@gmail.com",
    isLoggedin: false,
    lastLogInDays: ["Monday","Tuesday","Saturday"]  

}
// console.log(JsUser.name)  //this is one of method but not the correct method to access object elements. (maximum used)

//second method
// console.log(JsUser["email"]);  //yha par as a string likhana padega. ex-  ["email"]

// console.log(JsUser["full name"]); //for this type of keys, we have to use second method like this.

// console.log(JsUser.mySym); //o/p-> myKey1- But its datatype is string
// console.log(typeof JsUser.mySym); //string

// console.log(JsUser[mySym]); //myKey1 
// console.log(typeof JsUser[mySym]);//String //typeof checks the VALUE, not the KEY
//typeof → checks the type of that returned value 

JsUser.email = "prahant@gmail.com"
// Object.freeze(JsUser)  //it lock the object, after that no changes will happen

JsUser.email = "prahant1902@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Helllo JS User ${this.name}`); //this is used for taking  referance of thet object, and access its property
    
}
console.log(JsUser.greeting);  //o/p-> [Function (anonymous)]
console.log(JsUser.greeting()); //Hello JS User
console.log(JsUser.greetingTwo()); //Helllo JS User Prashant
