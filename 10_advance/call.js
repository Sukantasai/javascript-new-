function SetUsername (username){
    this.username = username;

}
function createUser (username, email, password){

    SetUsername.call(this,username)

    this.email = email;
    this.password = password;
}const chai = new createUser("chai", "chai@ec.com","123456")
console.log(chai);
