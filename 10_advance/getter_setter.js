class User{
    constructor(email, password) {
       this.email = email;
       this.password = password 
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return`${this._password}sukanta`
    }
    set password(value){
        this._password = value
    }
}

const suknata = new User("sukanta@.ai","abc1234")
console.log(suknata.email);
