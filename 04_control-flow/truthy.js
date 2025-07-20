const userEmail =[]

// if(userEmail){
//     console.log(`user email :  ${userEmail}`);
    
// }else{
//     console.log("don't have any");
    
// }
// if(userEmail.length ===0){
//     console.log('array is empty');
    
// }


// falsy values


// false, 0, -0, BigInt 0n,"",null, undefined, NaN

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??) : null undefined

let val1,val2,val3,val4;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 15

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniray Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice<= 80 ? console.log("less then 80"):console.log("more than 80");

