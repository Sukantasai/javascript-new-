class User {
    constructor(username, email, password){
        this.username = username;
        this.email  = email;
        this.password = password;
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}

const chai = new User ("chai","chai@example.com","123456")
console.log(chai.encryptpassword());
console.log(chai.changeUsername());


// behind the scenes

function Users (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
Users.prototype.encryptpassword = function(){
    return`${this.password}abcd`
}
Users.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new Users("tea","tea@example.com","312456")
console.log(tea.encryptpassword());
console.log(tea.changeUsername());

