class Animal{
    constructor(name){
        this.name = name
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
}

class rabbit extends Animal{
    run(){
        console.log(`${this.name} is running`)
    }
}
class fish extends Animal{
    swim(){
        console.log(`${this.name} is swimming`)
    }
}
class hawk extends Animal{
    fly(){
        console.log(`${this.name} is flying`)
    }
}

let rabbit1 = new rabbit("Bunny")
rabbit1.eat()
rabbit1.run()
rabbit1.sleep()
let fish1 = new fish("fishy")
fish1.eat()
fish1.swim()
fish1.sleep()
let hawk1 = new hawk("hawky")
hawk1.eat()
hawk1.fly()
hawk1.sleep()
let a = new Animal("animal")
a.eat()
a.sleep()