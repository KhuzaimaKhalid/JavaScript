setTimeout(function(){
    console.log("Hello")
}, 3000)

const numbers = [1, 2, 3, 4, 5]

const squares = numbers.map(function(n){
    return n*n
})

const cubes = numbers.map(function(n){
    return n*n*n
})

const even = numbers.filter(function(n){
    return n % 2 === 0
})

const odd = numbers.filter(function(n){
    return n % 2 !== 0
})

console.log(squares)
console.log(cubes)
console.log(even)
console.log(odd)