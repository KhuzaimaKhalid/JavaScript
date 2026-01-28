const car1 = {
    name : "Toyota",
    model : "Corolla",
    year : 2020,
    start : () => {
        console.log("Toyota started");
    }
}

const car2 = {
    name : "Nissan",
    model : "GTR",
    year : 2021,
    start : () => {
        console.log("Nissan started");
    }
}

console.log(car1);
console.log(car1.name)
console.log(car1.model)
console.log(car1.year)
car1.start()

console.log(car2);
console.log(car2.name)
console.log(car2.model)
console.log(car2.year)
car2.start()