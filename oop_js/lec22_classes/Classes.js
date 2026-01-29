class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }
    display(){
        console.log(`Product Name: ${this.name}, Price: $${this.price}`)
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05

const product1 = new Product("Laptop", 1200)
const product2 = new Product("Smartphone", 800)
product1.display()
console.log(`The total price with sales tax is: $${product1.calculateTotal(salesTax)}`)
product2.display()
console.log(`The total price with sales tax is: $${product2.calculateTotal(salesTax)}`)