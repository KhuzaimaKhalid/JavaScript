let numbers = [1,2,3,4,5]

function double(element,index,array){
    array[index] = element * 2
}
function triple(element,index,array){
    array[index] = element * 3
}

function display(element){
    console.log(element)
}

numbers.forEach(double)
numbers.forEach(display)
numbers.forEach(triple)
numbers.forEach(display)

let fruits = ['apple', 'banana', 'cherry']

function uppercase(element,index,array){
    array[index] = element.toUpperCase()
}

function lowercase(element,index,array){
    array[index] = element.toLowerCase()
}

function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
}

fruits.forEach(uppercase)
fruits.forEach(display)
fruits.forEach(lowercase)
fruits.forEach(display)
fruits.forEach(capitalize)
fruits.forEach(display)