const myObject = {
    JS: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    java: 'Java'

}
//for-in loop
//for object

for (const key in myObject) {
//    console.log(`${key} for ${myObject[key]}`);
}
//note:hum object ki key use karke uski value find kar sakte hai, but yha . se access hi hoga kyoki ye key nhi hai variable hai so [] ke ander likhenge. 

//for array
const programming = ['js', 'rb', "java","cpp", "python"]
for (const key in programming) {
//    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of America")
map.set('Fr', "France")
map.set('Ge', "Germani")

for (const key in map) {
   console.log(key);
   
}
//map ke upar iteration nhi kiya ja sakta hai
