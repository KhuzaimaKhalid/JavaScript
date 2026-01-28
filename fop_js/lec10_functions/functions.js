function add(x, y) {
    return x + y
}
function subract(x, y) {
    return x - y
}
function multiply(x, y) {
    return x * y
}
function divide(x, y) {
    return x / y
}

let n = window.prompt("Enter operation = ")
let x = window.prompt("Enter x = ")
let y = window.prompt("Enter y = ")
x = Number(x)
y = Number(y)
switch (true) {
    case n == "+":
        window.alert(add(x, y))
        break;
    case n == "-":
        window.alert(subract(x, y))
        break;
    case n == "*":
        window.alert(multiply(x, y))
        break;
    case n == "/":
        window.alert(divide(x, y))
        break;

    default:
        window.alert("Invalid input!")
        break;
}