console.log("Let's Start Functon");

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
myFunction() //AISE FUNCTION KO EXECUTIVE KARTE HAI
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
console.log(loginusermsg()); //Please Enter a Username

//atleast prints default value
// function loginusermsg(username ="Sam"){}
//jab hum koi argument pass karenge toh default value override kar di jayegi