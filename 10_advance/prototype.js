// let myName = "Sukanta      ";
// let myWebsite = "Sukanta's_ERA";

// console.log(myName.trueLength);

let myHeros = ["Krishna","Rama","Shiva"]

let heroPower = {
    Krishna: "Chakra",
    Rama : "Bow and Arrow",
    Shiva :"Trident",
    getKrishnaPower : function(){
        console.log(`Krishna's power is ${this.Krishna}`);
        
    }

}

Object.prototype.sita = function(){
    console.log(`sita is present all the objects`);
    
}

Array.prototype.heySukanta = function(){
    console.log(`Sukanta say's namaste`);
    
}

heroPower.sita()
myHeros.Krishna()
heroPower.heySukanta()
myHeros.heySukanta()