function sum(callback, a,b){
    let result = a+b
    callback(result)
}

function display(result){
    console.log(`result = ${result}`)
}

function displaypage(result){
    document.getElementById("myh1").textContent = result
}

sum(display,10,20)
sum(displaypage,10,20)