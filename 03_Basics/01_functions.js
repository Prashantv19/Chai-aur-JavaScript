// console.log("Let's Start Functon");

function myFunction(){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("N")
    console.log("T")
}
// myFunction() //AISE FUNCTION KO EXECUTIVE KARTE HAI
//Parameter and argument?
// function addTwoNo(num1, num2){
// console.log(num1+num2);
// }
// addTwoNo(5,6) //11
// addTwoNo(5,"6") //56
// addTwoNo(5,"a") //5a
// addTwoNo(5,null) //5

// const result = addTwoNo(4,5) //9 //ye line bhi executive hogi
// console.log("result: ", result); //result:  undefined; because function return kuchh bhi nahi kar rha hai.

function addTwoNo(num1, num2){
    let result = num1 + num2
    return result
    console.log("Prashant"); //return ke baad kuchh bhi executive nhi hota hai.
}
const result = addTwoNo(4,5)
// console.log("result: ", result);
/*Note:- Jab hum function return karte hai tab hame console alag se likhana padta hai */

// function loginusermsg(username){
//     return `${username} just logged in`
// }
// console.log(loginusermsg("Prashant"));//Prashant just logged in
// console.log(loginusermsg("Navneet"));
// console.log(loginusermsg("Aditya"));
// console.log(loginusermsg("")); //just logged in
// console.log(loginusermsg()); //undefined just logged in

//agar parameter undefined hai then
function loginusermsg(username){
    if(username === undefined){
    //if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginusermsg()); //Please Enter a Username

//atleast prints default value
// function loginusermsg(username ="Sam"){}
//jab hum koi argument pass karenge toh default value override kar di jayegi


//------------------------next video------------
// rest function
//  function cartPrice(...num1){   //[ 200, 300, 350, 450, 2000 ]

 function cartPrice(val1,val2,...num1){ //200 and 300 , val1,val2 me chale gaye hai  //[ 350, 450, 2000 ]
    return num1
 }
//  console.log(cartPrice(200,300,350,450,2000)); 
 
//create a object
const user ={
    username: "Prashant",
    price: 199
}
//create a function to handle object
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user) //Username is Prashant and price is 199
//aise direct bhi object pass kar sakte hai
handleObject({          //Username is Rudra and price is 188
    username: "Rudra",
    price:188
})

//Passing array into function
const newarray =[200,400,600,800]
function returnFirstValue(getArray){
    return getArray[1]
}
console.log(returnFirstValue(newarray)); //400
console.log(returnFirstValue([200,400,600,800])); //400
