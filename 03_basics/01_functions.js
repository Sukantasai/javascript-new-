function SayMyName(){
console.log("S")
console.log("u")
console.log("k")
console.log("a")
console.log("n")
console.log("t")
console.log("a");

}
// SayMyName()
// console.log(SayMyName);

// function addTwoNumbers(number1 , number2){

// console.log(number1+number2);

// }


function addTwoNumbers(number1 , number2){

    // let result = number1+number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(4, 4)
// console.log("Result:",result);


function loginUserMessage(username="ss"){

    if(!username){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("Sukanta"))



function calculateCartPrice(val1,val2, ...num1 ){
    return num1
}

// console.log(calculateCartPrice(200,400,500,1000,5000));


const user ={
    username :"blueeyes",
    price:200
}
function handleObject(anyObject){
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handleObject(user)
handleObject({username:"sam",
    price:200
})


const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));
