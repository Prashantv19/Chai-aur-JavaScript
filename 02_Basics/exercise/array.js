/*Q1
Create an array of 6 numbers.
Print:
full array
first element
last element
array length
 */

const arr = [2,4,6,8,10,12]
// console.log(arr);  //[ 2, 4, 6, 8, 10 ]
// console.log(arr[0]); //2
// console.log(arr[5]); //12
// console.log(arr.length); //6
/*----------------------------------------------------------------------*/

/*Q2
Create array using new Array() constructor with 5 values.
Print index 2 and index 4.
 */

const newArray = new Array(20,30,50,"Bharat","India")
// console.log(newArray.length); //4
// console.log(newArray[2]); //50
// console.log(newArray[4]); //India
/*----------------------------------------------------------------------*/

/*Q3
Given: const arr = [5, 9, 2, 7, 1]

Print all elements using a for loop.
 */

const arrLoop = [5, 9, 2, 7, 1]
for (let i = 0; i < arrLoop.length; i++) {
    const loop = arrLoop[i]
//    console.log(loop);
}
/*----------------------------------------------------------------------*/

/*Q4
Start with:const nums = [1,2,3]
Do operations step by step:
add 4 at end
add 0 at beginning
remove last
remove first
Print array after each step.
 */
const nums = [1,2,3]
nums.push(4) //add 4 at end
// console.log(nums); //[ 1, 2, 3, 4 ]

nums.unshift(0) //add 0 at beginning
// console.log(nums); //[ 0, 1, 2, 3, 4 ]

nums.pop() //remove last
// console.log(nums); //[ 0, 1, 2, 3 ]

nums.shift() //remove first
// console.log(nums); //[ 1, 2, 3 ]
/*----------------------------------------------------------------------*/

/*Q5
Take empty array.
Using loop, push numbers 1–10 into it.
*/
const emptyArray = []
for (let i = 1; i <= 10; i++) {
    const pushArray = emptyArray.push(i)  
    // console.log(pushArray);
}
/*----------------------------------------------------------------------*/

/*Q6
Given:const marks = [45, 67, 89, 23, 67]
Check:
is 89 present?
index of 67
index of 100
*/

const marks = [45, 67, 89, 23, 67]
// console.log(marks.includes(89)); //true
// console.log(marks.indexOf(67)); //1
// console.log(marks.indexOf(80)); //-1
/*----------------------------------------------------------------------*/

/*
📌Important rule

indexOf(value) → returns index if found

indexOf(value) → returns -1 if not found

That’s why -1 is commonly used as a “not found” indicator in JavaScript.
*/
/*----------------------------------------------------------------------*/

/*
Q7
Search for a value in array using loop (not includes).
If found → print index → stop loop using break.
*/
const dateArray = [45, 67, 89, 23, 67]
for (let i = 0; i < dateArray.length; i++) {
    if (dateArray[i]==89) {
        console.log(`index ${i}`);
        break
    }
}
/*----------------------------------------------------------------------*/

