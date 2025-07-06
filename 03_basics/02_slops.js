

// var a =222
let b =333
if(true){
    let a = 444
    const c = 111
    // console.log("inner:",a +b+c);
    

}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "blueeyes"

    function two(){
        const app = "x"
        // console.log(username);
        
    }
        // console.log(app);
    two()
    
}
// console.log(username.app);

one()


if(true){
    const username = "blueeyes"
    if (username ==="blueeyes"){
        const app = "x"
        // console.log(app+username);
        
    }
    // console.log(app);
    
}
// console.log(username);


function addone(num){
    return num +1
}
console.log(addone(5))


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))
