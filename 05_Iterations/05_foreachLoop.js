//for-each loop ek inbuilt function hai Array me
const coding = ['js', 'rb', "java","cpp", "python"]

//callback function ke name nhi hote hai
//syntax
// coding.forEach( function (variable name) {
//     //what we want to do
// })

coding.forEach( function (val) {
    // console.log(val);
    
})

//using arrow function
coding.forEach(  (val) => {
    // console.log(val);
    
})

//another way
function printMe (item){
    // console.log(item);
}

// coding.forEach(printMe);

// this have more parameter except than 'item'
coding.forEach((item, index, arr)=> {
    // console.log(item, index, arr);
})

const mycoding = [
    {
        langName: "JavaScript",
        langFileName: "js"
    },
    {
        langName: "JavaScript",
        langFileName: "js"
    },
    {
        langName: "JavaScript",
        langFileName: "js"
    },
    {
        langName: "JavaScript",
        langFileName: "js"
    },
    {
        langName: "JavaScript",
        langFileName: "js"
    },
]
mycoding.forEach((item)=>{
    console.log(item.langName);
    console.log(item.langFileName);
    
})