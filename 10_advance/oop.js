const user = {
    username : "sukanta",
    loginCount : 8,
    signedIn: true,
    getUserDetails : function (){
        // console.log("Got user details form the database");
        // console.log(`Username is ${this.username}`);
        // console.log(`Login count is ${this.loginCount}`);
        // console.log(`Signed in status is ${this.signedIn}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User (username, loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Hello${this.username}`);
        
    }
    return this
}

const userone = new User ("Sukanta", 32, true)
const usertwo = new User ("Basudha", 21,false)
console.log(userone );
console.log(usertwo.constructor);
