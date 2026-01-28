class User{
    static count = 0

    constructor(name){
        this.name = name
        User.count++
    }

    static sayHello(){
        console.log("Hello Users!")
    }
}
const u1 = new User("John")
User.sayHello()
console.log(User.count)
const u2 = new User("Jane")
User.sayHello()
console.log(User.count)
const u3 = new User("Doe")
User.sayHello()
console.log(User.count)