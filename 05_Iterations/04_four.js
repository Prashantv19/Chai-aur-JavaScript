const myObject = {
    JS: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    java: 'Java'

}
//for-in loop
//for object
// for (const key in myObject) {
//    console.log(`${key} for ${myObject[key]}`);
// }
//note:hum object ki key use karke uski value find kar sakte hai, but yha . se access hi hoga kyoki ye key nhi hai variable hai so [] ke ander likhenge. 

//for array
const programming = ['js', 'rb', "java","cpp", "python"]
for (const key in programming) {
   console.log(programming[key]);
}

