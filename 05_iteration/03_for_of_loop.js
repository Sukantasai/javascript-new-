// For loop

const arr = [1, 2, 3, 4, 5]
for (const num of arr){
    // console.log(num);
    
}

const greeting = "hello baby"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`);
    
}


// Maps

const map  = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map);


for (const [key, value] of map){
    console.log(key, ':', value);
    
}


// const myObj = {
//     game1 : 'PES',
//     game2 :'Spiderman'
// }

// for(const [key, value] of myObj){
//     // console.log(key, ':-', value);
    
// }