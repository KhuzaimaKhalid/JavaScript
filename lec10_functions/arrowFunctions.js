const hello = (name,age) => {
    setTimeout(() => {
        console.log(`Hello ${name}`)
        console.log(`you are ${age} years old`)
    }, 3000);
}
hello("Khuzaima",20);

const numbers = [1,2,3,4,5];

const square = numbers.map((num)=>{
    return num*num
})

const cube = numbers.map((num)=>{
    return num*num*num
})

const even = numbers.filter((num)=>{
    return num%2 === 0
})

const odd = numbers.filter((num)=>{
    return num%2 !== 0
})

const total = numbers.reduce((accumulator,num)=>{
    return accumulator+num
})
console.log(square)
console.log(cube)
console.log(even)
console.log(odd)
console.log(total)