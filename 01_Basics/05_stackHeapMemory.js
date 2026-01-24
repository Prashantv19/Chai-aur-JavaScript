// Stack (all Primitive data types)- jab koi memory stack me define/store hoti hai toh waha se hame variable ka ek copy milta hai.
// Heap (all Non-Primitive data types)- aur jab koi memory heap me define/store hoti hai toh waha se referance milta hai original value ka.
let myName = "PrashantVishwakarma"
let yourName = myName
yourName = "Navneet"

console.log(myName);
console.log(yourName); //yha par hum copy me changes karte hai original data par koi effect nhi padta hai.

let userOne = {
    email: "name@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email= "prashant@gmail.com" //user two ka email change kiya toh user one ka emal bhi change ho jayega, bas itna hi.

console.log(userOne.email);
console.log(userTwo.email);
