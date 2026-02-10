// const coding = ['js', 'rb', "java","cpp", "python"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item    
// })
// console.log(values);   //undefined
//note:- forEach loop koi bhi values return nhi karta hai.

/*------------------------------------------------------------*/

const myNum = [2,3,4,5,6,7,8,9]

// const newNums = myNum.filter( (num) => num > 4)  //[ 5, 6, 7, 8, 9 ] ye Implicit (Automatic) return karta hai jabki

const newNums = myNum.filter( (num) => {
    return num > 4
})  //[] yha par hame alag se 'return' define karna padega Explicit (Manual / Intentional)
// console.log(newNums);

/*------------------------------------------------------------*/
//same kaam for each se kaise kare

const newArr = []

myNum.forEach( (num) => {
    if (num>4) {
        newArr.push(num)
    }
})
// console.log(newArr);

//Note:- ek empty array banaya, uske ander 4 se badi sari values ko push kar diya using forEach loop

/*------------------------------------------------------------*/
//An Example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userBooks = books.filter( (bk) => bk.genre === 'History')
console.log(userBooks);

userBooks = books.filter( (bk)=> {return bk.publish >= 2002})
console.log(userBooks);

//note: if we use { } then we have to use return 
