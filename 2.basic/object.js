// singleton

//object literals
//Object.create: create new object- singleton 
const mySym = Symbol("key1")

const JsUser ={
    name:"Mukul",
    age:18,
    location:"Jaipur",
    [mySym]:"keys",
    email:"mbarth@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
