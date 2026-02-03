const user = {
    username : "Prashant",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`); //[this] is refer current context
        console.log(this)
    }
}
// user.welcomeMsg() //Prashant, welcome to website

// user.username = "siddharth"
// user.welcomeMsg() //siddharth, welcome to website

// console.log(this); //{} (empty object)
/*Note:- In node environment it gives {} empty object but in console it gives many globle objects like window(most asked) */

// --------------------------------------------------------------

function one(){
    let username = "Prashant"
    console.log(this);  //under a function it give many objects here. 
    // console.log(this.username); //undefined,  ye concept object ke ander hi kaa kar rha hai function me nhi kar rha hai
}
// one()

//this also gives same O/P as above 
// const two = function(){
//     let username = "Prashant"
//      console.log(this); //under a function it give many objects here. 
    
//     console.log(this.username); //undefined,
// }
// two()

//--------------------Arrow Function----------------------------
// const two = () => {
//     let username = "Prashant"
//     console.log(this); //{} empty
//     console.log(this.username); //undefined,
// }
// two()

//--------------------Arrow Function----------------------------

///simple arrrow Function
// const arrowFunction = (num1, num2) => {
//     return num1+ num2
// }
// console.log(arrowFunction(4,5)) //9
//------------------------------------------------

// Implicit return - mai man leta hu, apko return keyword likhane ki jaarurat nhi hai
// const arrowFunction = (num1, num2) =>  num1+ num2

// const arrowFunction = (num1, num2) =>  (num1+ num2)  //() laga sate hai, but jab {} use karenge toh retunr likhana padega.

//object returns like this
const arrowFunction = (num1, num2) =>  ({username: "Prashant"})

console.log(arrowFunction(4,5)) //9
//------------------------------------------------

const myArray = [2,3,4,5,6]

myArray.forEach()
