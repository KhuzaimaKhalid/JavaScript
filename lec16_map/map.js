let numbers = [1,2,3,4,5]

function square(x){
    return Math.pow(x,2)
}
function cube(x){
    return Math.pow(x,3)
}
let squares = numbers.map(square)
console.log(squares)
let cubes = numbers.map(cube)
console.log(cubes)

const students = ["John", "Jane", "Jim", "Jill"]

function upperCase(n){
    return n.toUpperCase()
}

function lowerCase(n){
    return n.toLowerCase()
}

let u = students.map(upperCase)
let l = students.map(lowerCase)
console.log(u)
console.log(l)

function greet(name){
    return `Hello, ${name}!`
}
let g = students.map(greet)
console.log(g)

const dates = ["2022-01-01", "2022-02-15", "2022-03-30"]

function formatDate(date){
    const parts = date.split("-")
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}
let f = dates.map(formatDate)
console.log(f)