const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)
})

promiseOne.then(function(){
    console.log("Promice consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})


const promiseThree = new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve({username :"Jhon",email:"jhonsina@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"blueeyes",password:"1234"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("The promise is either resolve or rejected"))

 