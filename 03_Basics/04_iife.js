/*Immediately Invoked Function Expression (IIFE) */
//use- immediately execute ho jaye, and globle scope se palution ko hatane ke liye
/* function ko () me rap kar do bas*/
//Named IIFE
(function chai (){
    console.log(`DB Connected`);
    
})(); //DB Connected,  
//yha hame semicolan lagana padega, to stop this because it didn't know where to stop this function

//UnNamed IIFE(it is an arrow function)
(() =>{
    console.log(`DB connected to `);
    
})(); // yha bhi ; lagana padega kyoki ye khud ke liye problem nhi hai next ke liye hai

((name) =>{
    console.log(`DB connected to ${ name}`);
    
})("prashant")

//note: 2 IIFE ke bich me ; lagana important hai.