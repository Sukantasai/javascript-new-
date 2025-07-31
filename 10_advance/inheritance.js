class User {
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai" , "chai@example.com", "1234")

chai.logMe()

const basudha = new User ("basudha")

basudha.logMe()


console.log(chai instanceof User);
