try{
    const dividened = Number(window.prompt("Enter the dividend: "))
    const divisor = Number(window.prompt("Enter the divisor: "))
    if(divisor === 0){
        throw new Error("Division by zero is not allowed.")
    }
    if(isNaN(dividened) || isNaN(divisor)){
        throw new Error("Invalid input. Please enter numeric values.")
    }
    const result = dividened / divisor
    console.log(result)
} catch(error){
    console.error( error.message)
}

console.log("You have reached the end of the program.")