const course = {
    coursename: "Js in hindi",
    price:"999",
    courseInstructor: "Mukul"
}
//console.log(course.courseInstructor)

const {courseInstructor} = course //destuct
const {courseInstructor:inst} = course //object destuct
console.log(inst)