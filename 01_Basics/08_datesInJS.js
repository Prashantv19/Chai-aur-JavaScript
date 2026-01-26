//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).*/

let myDate = new Date()
// console.log(myDate);  //2026-01-26T17:13:20.375Z
// console.log(myDate.toString()); //Mon Jan 26 2026 22:40:56 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  //Mon Jan 26 2026
// console.log(myDate.toISOString());   //2026-01-26T17:13:20.375Z
// console.log(myDate.toJSON());      //2026-01-26T17:13:20.375Z
// console.log(myDate.toLocaleString());  //26/1/2026, 10:48:12 pm

// console.log(myDate.toLocaleDateString());   //26/1/2026

// console.log(typeof myDate); //object

/*Note- 
2024-03-10 02:30 is within the spring-forward transition and does not exist
01:59 (UTC-5) jumps to 03:00 (UTC-4), so 02:30 moves forward by one hour
console.log(new Date(2024, 2, 10, 2, 30).toString());
Sun Mar 10 2024 03:30:00 GMT-0400 (Eastern Daylight Time)*/

let dateCreated = new Date(2024, 0, 11, 2, 30, 36, 789) //o/p-2024-01-10T21:00:36.789Z //(year, monthIndex, day, hours, minutes, seconds, ms),Month = January (0)
// console.log(dateCreated.toLocaleString());

// another way to define date as  a string
let newDate = new Date("2023-01-26") //yyyy-mm-dd// another way to define date as  a string
// console.log(newDate.toLocaleString()); // 26/1/2023, 5:30:00 am

let myTimeStamp = Date.now()   //to define time stamps 

// console.log(myTimeStamp);  //1769450027242 -> this is total count of time in ms from 01 Jan 1970 to (Date.now).
// console.log(dateCreated.getTime()); //1704920436789 -> this is total count of time in milisecond from 01 Jan 1970 to (2024, 0, 11, 2, 30, 36, 789).
// console.log((Date.now()/1000));
// console.log(Math.floor(Date.now()/1000));


let anotherDate = new Date()
console.log(anotherDate);
console.log(anotherDate.getMonth()); // 0 -> January
console.log(anotherDate.getMonth() + 1); // 1 -> January
console.log(anotherDate.getDay()); //1  -> Monday

 
 console.log(anotherDate.toLocaleString('default', {
    weekday: "long", 
    
 }));
 