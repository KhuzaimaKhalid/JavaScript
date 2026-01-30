const fruits = [
    { name: "Apple", color: "Red", calories: 95 },
    { name: "Banana", color: "Yellow", calories: 105 },
    { name: "Orange", color: "Orange", calories: 62 },
    { name: "Grapes", color: "Purple", calories: 62 },
    { name: "Coconut", color: "Brown", calories: 354 }
]

console.log(fruits)
console.log(fruits[0])
console.log(fruits[2].name)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].name)
    console.log(fruits[i].color)
    console.log(fruits[i].calories)
}

fruits.push({ name: "Mango", color: "Yellow", calories: 201 })
console.log(fruits)
fruits.pop()
console.log(fruits)

fruits.forEach(fruit => {
    console.log(fruit.name)
    console.log(fruit.color)
    console.log(fruit.calories)
})

const fruitNames = fruits.map(fruit => fruit.name)
const fruitColors = fruits.map(fruit => fruit.color)
const fruitCalories = fruits.map(fruit => fruit.calories)
console.log(fruitNames)
console.log(fruitColors)
console.log(fruitCalories)

fruits.push({ name: "Mango", color: "Yellow", calories: 201 })

const yellowFruits = fruits.filter(fruit => fruit.color === "Yellow")
console.log(yellowFruits)

const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100)
console.log(lowCalorieFruits)

const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)
console.log(highCalFruits)

const maxFruit = fruits.reduce((max, fruit) => (
    fruit.calories > max.calories ? fruit : max), fruits[0])
console.log(maxFruit)

const minFruit = fruits.reduce((min, fruit) => (
    fruit.calories < min.calories ? fruit : min), fruits[0])
console.log(minFruit)
