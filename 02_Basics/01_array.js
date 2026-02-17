/*Array*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
/*-----------------------------------------*/

const myArr = [8,1,6,3,4,5]
console.log(myArr); //[ 0, 1, 2, 3, 4 ]
console.log(myArr[1]); //0
/*-----------------------------------------*/

// const myHeros = ["Ironman","SpyderMan","Baalveer"]
/*-----------------------------------------*/

//another method to define an array
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2.length); //5
console.log(myArr2[1]); //2

/*-------------ArrayMethod---------------- */
// myArr.push(6) //it adds element in the end of an array
// console.log(myArr);

// myArr.push(7) 
// console.log(myArr);

// myArr.pop() //it removes the last element of an array
// console.log(myArr);
/*-----------------------------------------*/

// myArr.unshift(8) //it adds element in the beginning of an array
// console.log(myArr);

// myArr.shift() //it removes the first element of an array
// console.log(myArr);
/*-----------------------------------------*/

console.log(myArr.includes(6));// it checks that given array element is present or not

/*NOte-
console.log(myArr.includes(searchElement: number,fromIndex?: number));
searchElement: number (required)
This is the number you want to find inside the array.
fromIndex?: number (optional)
This defines the index from where the search should start.*/
/*-----------------------------------------*/

// console.log(myArr.indexOf(8));// It will show the index of that given element.    
/*-----------------------------------------*/

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr); //the type will String because join() converts the array into a String.
/*-----------------------------------------*/

// slice(startIndex, endIndex)-> Extract (copy) a portion of an array without modifying the original array. 

const arr = [10, 20, 30, 40, 50];
const result = arr.slice(1, 4);  //4th value will not be included,
console.log(result);    // [20, 30, 40]
console.log(arr);       // [10, 20, 30, 40, 50] (unchanged)
/*-----------------------------------------*/

//splice(startIndex, deleteCount, item1, item2, ...)-> Remove, replace, or insert elements modifying the original array.

const arr1 = [10, 20, 30, 40, 50];
const deleted = arr1.splice(1, 2);

console.log(deleted); // [20, 30] this is extracted value
console.log(arr1);     // [10, 40, 50]  this is original array
/*---------------------end-----------------*/

/*----------------Practice-----------------*/