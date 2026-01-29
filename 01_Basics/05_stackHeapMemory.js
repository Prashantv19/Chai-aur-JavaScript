/*---------------------------------------------------------------------------------------------- */
//STACK
// Stack (all Primitive data types)- jab koi memory stack me define/store hoti hai toh waha se hame variable ka ek copy milta hai, original value me koi change nhi hota hai.

let myName = "PrashantVishwakarma"
let yourName = myName
yourName = "Rudra Vishwakarma"

console.log(myName);  //Prashant Vishwakarma
console.log(yourName); //Rudra Vishwakarma //yha par hum copy me changes karte hai original data par koi effect nhi padta hai.
/*---------------------------------------------------------------------------------------------- */
//HEAP
// Heap (all Non-Primitive data types)- aur jab koi memory heap me define/store hoti hai toh waha se original value ka referance milta hai na ki copy ka. and jab hum new variable me koi changes karte hai toh vo original value me bhi hoa hai.

let userOne = {
    email: "name@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email= "prashant@gmail.com" //usertwo ka email change kiya toh user one ka email bhi change ho jayega, bas itna hi.

console.log(userOne.email);  //prashant@gmail.com
console.log(userTwo.email); //prashant@gmail.com
/*---------------------------------------------------------------------------------------------- */
