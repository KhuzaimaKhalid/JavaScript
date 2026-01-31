const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"]
const jsonString = JSON.stringify(names)
console.log(names)
console.log(jsonString)

const person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

const jsonPerson = JSON.stringify(person)
console.log(person)
console.log(jsonPerson)

const people = [
    {
        "name": "Alice",
        "age": 30,
        "city": "New York"
    },
    {
        "name": "Bob",
        "age": 25,
        "city": "Los Angeles"
    },
    {
        "name": "Charlie",
        "age": 35,
        "city": "Chicago"
    }
]

const jsonPeople = JSON.stringify(people)
console.log(people)
console.log(jsonPeople)

const names1 = `["Alice","Bob","Charlie","Diana","Ethan"]`
const person1 = `{
    "name": "Alice",
    "age": 30,
    "city": "New York"
}`
const people1 = `[
    {
        "name": "Alice",
        "age": 30,
        "city": "New York"
    },
    {
        "name": "Bob",
        "age": 25,
        "city": "Los Angeles"
    },
    {
        "name": "Charlie",
        "age": 35,
        "city": "Chicago"
    }
]`

console.log("--- Parsing JSON Strings ---")

const paredNames = JSON.parse(names1)
console.log(names1)
console.log(paredNames)

const parsedPerson = JSON.parse(person1)
console.log(person1)
console.log(parsedPerson)

const parsedPeople = JSON.parse(people1)
console.log(people1)
console.log(parsedPeople)

console.log("--- Fetching JSON Data ---")

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))

fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))     
fetch("people.json")
    .then(response => response.json())
    .then(value => value.forEach(value => {
        console.log(value.name)
    }))
    .catch(error => console.error(error))    