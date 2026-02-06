//Switch case Syntax
/*
switch (key) {  //key- iss condition ko check karo
    case value:
        
        break;

    default:
        break;
}
*/
//--------------------------------------------------------------
//we can write string intead of number, no problem anymore.
const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default: console.log("Default case match");
    
        break;
}
/*note: If break is not used, switch executes all statements after the matched case — including default — until a break or end of switch block is reached.*/

/*Switch is basically:jump to matched label then run line-by-line until break/end*/

/*In switch, missing break causes fall-through — execution continues into all following cases, including default, until a break or end of block. */

/*Break- break tells the switch block: “Stop here. Don’t run further cases.” */