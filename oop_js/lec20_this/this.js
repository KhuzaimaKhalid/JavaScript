const car1 = {
    name : "BMW",
    model : "X5",
    year : 2020,
    getDetails : function() {
        return `${this.name} ${this.model} (${this.year})`;
    }
}

const car2 = {
    name : "Lamborghini",
    model : "Aventador",
    year : 2021,
    getDetails : function() {
        return `${this.name} ${this.model} (${this.year})`;
    }
}
console.log(car1.getDetails()); 
console.log(car2.getDetails());
console.log(this)