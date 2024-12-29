const tinderUser = new Object()
//console.log(tinderUser)
const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Mukul",
            lastname: "barthwal"
        }
    }
}
//console.log(regularUser.fullname.userfullname)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = {obj1,obj2}
//console.log(obj3)
//const obj3 = Object.assign(obj1,obj2)
const obj3 = Object.spread(...obj1,...obj2)
//console.log(obj3)