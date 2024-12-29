//array

const myArr = [0,1,2,3,4,5]
const myArr1 = new Array(1,2,3,4)
//console.log(myArr1[1])
myArr.push(6)
//myArr.unshift(9)//Adds one or more elements to the beginning of an array.
//myArr.shift(9)//Removes the first element from an array.
//join: join and convert valur into string
//const newArr = myArr.join()
//console.log(newArr)
//console.log(myArr)
/*slice,splice: slice()
Purpose: Returns a shallow copy of a portion of an array into a new array.
Does not modify the original array.
Syntax: array.slice(start, end)
start (optional): Index where extraction begins (inclusive).
end (optional): Index before which extraction ends (exclusive).
*/
/*splice: Purpose: Adds or removes elements from an array.
Modifies the original array.
Syntax: array.splice(start, deleteCount, item1, item2, ...)
start: Index where changes are made.
deleteCount: Number of elements to remove.
item1, item2, ... (optional): Elements to add at the start position.*/


/*console.log("A",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr)*/

const marvel_heroes = ["thor","Ironman","Spiderman"]
const dc = ["superman","flash","batman"]
/*marvel_heroes.push(dc)
console.log(marvel_heroes)*/

const all_heroes = [...marvel_heroes,...dc]//spread perator
//console.log(all_heroes)
//console.log(Array.isArray("Mukul"))
//console.log(Array.from("Mukul"))

let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))