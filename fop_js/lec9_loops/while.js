let loggedIn = false
let username,password

while(!loggedIn){
    username = window.prompt("Enter username: ")
    password = window.prompt("Enter password: ")

    if(username === "user" && password === "pass"){
        loggedIn = true
        console.log("login sucessful")
    } 
}