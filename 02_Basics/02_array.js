const arr1 = ["Thor","Ironman","Hulk"]
const arr2 = ["superman","flash","batman"]

// arr1.push(arr2)
// console.log(arr1);  //[ 'Thor', 'Ironman', 'Hulk', [ 'superman', 'flash', 'batman' ] ]

// console.log(arr1[3][1]); //arr1 ke third element ka first element.
//there are no differance between push and concat

const arr3 = arr1.concat(arr2) // [ 'Thor', 'Ironman', 'Hulk', 'superman', 'flash', 'batman' ]
//we have to strore concat function into a new variable.
console.log(arr3);

const newArray = [...arr1,...arr2] //spread operator, ye individual array ko spread kar deta hai ek new array me
console.log(newArray);//[ 'Thor', 'Ironman', 'Hulk', 'superman', 'flash', 'batman' ]

const multiArray = [2,3,4,[5,6,7],[4,5,6,[7,8,9]]]

// const flatedArray = multiArray.flat(0) // [ 2, 3, 4, [ 5, 6, 7 ], [ 4, 5, 6, [ 7, 8, 9 ] ] ]
// const flatedArray = multiArray.flat(1) // [ 2, 3, 4, 5, 6, 7, 4, 5, 6, [ 7, 8, 9 ] ]
// const flatedArray = multiArray.flat(2) // [2, 3, 4, 5, 6, 7, 4, 5, 6, 7, 8, 9]
const flatedArray = multiArray.flat(Infinity)  //   [2, 3, 4, 5, 6, 7, 4, 5, 6, 7, 8, 9] 
console.log(flatedArray);


