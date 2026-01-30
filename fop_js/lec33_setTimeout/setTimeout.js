// setTimeout(()=>{
//    window.alert("Hello")
// },3000)

let timeID
function setTimer(){
   timeID = setTimeout(()=>{
        window.alert("Hello")
    },3000)
    console.log("started")
}

function cancelTimer(){
    clearTimeout(timeID)
    console.log("canceled")
}