console.log("script.js running")

let button = document.getElementById("btn")

button.addEventListener("click", () => {
    // alert("i am clicked")
    document.querySelector(".box").innerHTML = "I am changed"
    
})

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "I am double clicked"
    
})

button.addEventListener("contextmenu", () => {
    alert("You right clicked")
    
})

document.addEventListener("keydown", (e) => {
    console.log(e)
})