//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const myNums = [1,2,3]

const myreduce = myNums.reduce(function (Acc, cur_val){

    console.log(`Acc: ${Acc} and cur_val: ${cur_val}`);
    
    return Acc +cur_val  
}, 0)   //0 is initial value for accumulator(Acc)
console.log(myreduce); //6

//O/P
/*
Acc: 0 and cur_val: 1
Acc: 1 and cur_val: 2
Acc: 3 and cur_val: 3
 */

/*------------------------------------------------------------*/
//Now using Arrow=> function

const mytotal = myNums.reduce( (Acc, cur_val) => Acc+cur_val, 0)
console.log(mytotal); //6

/*------------------------------------------------------------*/
const shopppingcart = [
    {
        itemName : "webDev",
        price: 999
    },
    {
        itemName : "appDev",
        price: 1199
    },
    {
        itemName : "bolckchain",
        price: 8999
    },
    {
        itemName : "dataScience",
        price: 5999
    },
    {
        itemName : "cloudComputing",
        price: 3999
    },
    {
        itemName : "Frontend",
        price: 2999
    }
]
const totalPrice = shopppingcart.reduce( (acc, item) => acc + item.price, 0)
 console.log(totalPrice); //24194
