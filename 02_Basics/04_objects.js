//singleton-  jab constructor se obj banate hai tab singleton object banata hai

const tinderUser = new Object() //singleton object
//VS,[the only differance is singleton and non-singleton, not any differance in output]
// const tinderUser = {} //non-singleton object
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Prashant"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //O/P-> { id: '123abc', name: 'Prashant', isLoggedIn: false }

const regularUser = {
    email: "Prashant@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Prashant",
            lastName:"Vishwakarma"
        }
    }
}
//Object ke ander object (Nested object)
// console.log(regularUser.fullName); //{ userFullName: { firstName: 'Prashant', lastName: 'Vishwakarma' } }
// console.log(regularUser.fullName.userFullName); //{ firstName: 'Prashant', lastName: 'Vishwakarma' }
// console.log(regularUser.fullName.userFullName.firstName); //Prashant
// console.log(regularUser.fullName.userFullName.lastName); //Vishwakarma

// console.log(regularUser.fullName?.userFullName.lastName); // ?-> If this object's value is present then access otherwise don't access it. don't need to write if-else.

const obj1 ={1: "A", 2: "B"}
const obj2 ={3: "C", 4: "D"}

// const obj3 = {obj1 ,obj2}  //{ obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

const obj3 = Object.assign({}, obj1,obj2) //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
//{}-> this is an optional parameter to 100% confirm this type of O/P
console.log(obj3);
