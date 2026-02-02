//globle scope - {} ke bahar , globle scope ki value scope ke ander available hoti hai.
//block scope - {} ke ander,scope ke ander jo value hoti hai vo bahar nhi jana chahiye

// var c = 300 //let's see koi same variable define kar de then
//it will still showing 30

let a = 300

if (true){
    let a = 10
    const b = 20
    // console.log("Inner", a); // ander ki chij ander hi rahegi
    
    var c = 30
    c = 30  //aise bhi same problem aayegi
}

// console.log(a); //a is not defined
// console.log(b); // b is not defined
// console.log(c); //But C execited - (30), this is the problem 

//  console.log(a); //300 // if ke ander ki value anderr hi rahegi, bahar nhi aayegi

 //Note:- console ke ander globle scope alag hota hai and node environment ke ander globle scope alag alag hota hai.



 //---------------------------new video-------------------------
 function one(){
    const username = "Naveen"
    function two(){
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);
    
    two()
 }
 one()
