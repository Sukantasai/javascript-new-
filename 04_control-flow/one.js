// const isUserloggedIn = true
// const temperature = 42

// if(temperature ===42){
//     console.log("less then 50");
// }else{
//     console.log("temperature is grater then 50");
// }
// console.log("execute");


// const score = 200
// if (score >100){
//     let power = "fly"
//     console.log(`User power :${power}`);
    
// }
// console.log(`User power :${power}`);


// const balance = 1000

// // if(balance>100) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less then 500");
// }else if(balance < 730){
//     console.log("less then 730");    
// }else if(balance ===1200){
//     console.log("okay");
    
// }else{
//     console.log("good");
    
// }

const isUserloggedIn = true
const debitCard = true
const loggedInFromGoolge = false
const loggedInFromEmail = false


if (isUserloggedIn && debitCard){
    console.log("Allow to buy"); 
}
else{
    console.log("Otherwise not");
    
}

if(loggedInFromEmail || loggedInFromGoolge){
    console.log("Accepted");
    
}
else{
    console.log("NOt accepted");
    
}