const accountId = 2323    // ye only constant define karne ke liye use hota hai.
let accountEmail = "Prashant@gmail.com"  // isme scope problem nahi hai this is only differance between 'let' and 'var'
var accountPassword = "1234"   // 'var' have scope problem due to same variable name
accountCity = "Jaunpur"   // we can define it without variable keyword but not recommended

let accountState; // it will show undefinede because uski value nahi likhi hai.

// accountId = 2  // it can not be changed
accountEmail = "Prasha@gmail.com"
accountPassword = "98456984"
accountCity = "vns"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use 'var'
because of block scope , functional scope problem
*/
/*
prefer not to use 'var'
because of block scope , functional scope problem
*/
