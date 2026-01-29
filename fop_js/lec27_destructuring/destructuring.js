let a =1;
let b = 2;
[a, b] = [b, a]
console.log(a)
console.log(b)

const colors = ["red","orange","yellow","green","purple"];
[colors[0],colors[4]] = [colors[4], colors[0]]
console.log(colors)

const [firstColor,secondColor,thirdColor, ...extraColors] = colors
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)

const car1 = {
    name : "BMW",
    color : "blue",
    model : "X5",
    year : 2020
}

const car2 = {
    name : "Audi",
    color : "black",
    model : "Q7",   
}

const {name,color,model,year = 2026} = car2
console.log(name)
console.log(color)
console.log(model)
console.log(year)

function display({name,color,model,year=2026}) {
    console.log(name)
    console.log(color)
    console.log(model)
    console.log(year)
}

display(car1)
display(car2)