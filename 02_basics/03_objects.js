// const { jsx } = require("react/jsx-runtime")


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Sukanta",
    "full name": "Sukanta Sai",
    id : "211001001300",
    email : "sukanta@gmail.com",
    [mySym]: "mykey1",
    location : "kolkata",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Friday"]
}
// console.log(JsUser.name)
// console.log(JsUser["full name"])
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])


JsUser.email = "sukanta@ghat.com"
// Object.freeze(JsUser)

JsUser.email = "sukanta@google.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hii my name");
}
JsUser.greetingTwo = function(){
    console.log(`Hii my name, ${this.name}`);
}

console.log(JsUser.greeting())

console.log(JsUser.greetingTwo())