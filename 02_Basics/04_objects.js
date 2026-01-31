//singleton-  jab constructor se obj banate hai tab singleton object banata hai

const tinderUser = new Object() //singleton object
//VS,[the only differance is singleton and non-singleton, not any differance in output]
// const tinderUser = {} //non-singleton object
// console.log(tinderUser);

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

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// const obj3 = Object.assign({}, obj1,obj2) //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
//{}-> this is an optional parameter to 100% garantee this type of O/P
//const obj3 = Object.assign({},obj1, obj2, obj4) //{} -> target objest, and other are source object.thats it.

const obj3 = {...obj1,...obj2}  //90% yahi use karenge, easy simple, short
// console.log(obj3);

// Array of Object

const users = [
    {
        id: 1,
        email: "Pv@gmail.com",
    },
    {
        id: 1,
        email: "Pv@gmail.com",
    },
    {
        id: 1,
        email: "Pv@gmail.com",
    },
    {
        id: 1,
        email: "Pv@gmail.com"
    }
]
// console.log(users[1].email);
// console.log(users[1].id);


// console.log(tinderUser); //{ id: '123abc', name: 'Prashant', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] its data type is array


// console.log(Object.values(tinderUser)); //[ '123abc', 'Prashant', false ]

// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Prashant' ], [ 'isLoggedIn', false ] ]
//every key : value ko array me convert kar deti hai

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //bollean me answer aayega. i.e.  true/false


//--------------------------------------------------------------

const course = {
    courseName: "DBMS",
    price: 999,
    courseInstructor: "Hitesh"
}
// course.courseInstructor //agar yahi chij hume 4-5 bar likhna ho toh that is to hard so use this

const {courseInstructor} = course
console.log(courseInstructor);
//ye concept React me kafi use hota hai
const {courseInstructor: Instructor} = course  // Object destructure
console.log(Instructor);
//

/*How API Rsponse Look Like */

/*
{
    "courseName": "DBMS",
    "site_admin": false,
    "id": 11613311,
    "price": 999,
    "courseInstructor": "Hitesh"
}
*/
// https://api.github.com/users/Prashantv19 
//https://randomuser.me/api/

/*
note:-
1. API response object and array kisi bhi form me mil sakta hai
2. API response, JSON (Javascript  Object Notation) me likha rahta hai
3. 
 */