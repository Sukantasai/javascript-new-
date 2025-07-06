// singleton

// const tindereUser = new Object()
const tindereUser = {}

tindereUser.email = "sukanta@gmail.com"
tindereUser.id = "211001001300"
tindereUser.name = "sukanta"
tindereUser.isLoggedIn = false

// console.log(tindereUser.name)

const regularUser = {
    email :"sai@gamil.com",
    fullname :{
        userfullname:{
            firstname:"blue",
            lastname:"eyes"
        }
    }

}
// console.log(regularUser.fullname.userfullname.lastname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1 , obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);


const Users = [

    {
        id : 1,
        email:"ss@gmsil.com"
    },
    {

        id : 2,
        email: "ss@gmail.com"
    },
    {
        id: 3,
        email:"ss@gmail.com"
    }
]
Users[1].email

// console.log(user);
// console.log(Object.keys(tindereUser));
// console.log(Object.keys(user));

//  console.log(Object.values(tindereUser));
// console.log(Object.values(user));

// console.log(Object.entries(user));
// console.log(Users.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js mastery",
    price : "999",
    courseInstractor :"sukanta",
}

// course.courseInstractor

const {courseInstractor:instructor} = course

// console.log(course.courseInstractor);
// console.log(instructor);
