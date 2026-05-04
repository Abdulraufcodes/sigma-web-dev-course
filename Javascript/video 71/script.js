// document.querySelector(".box").textContent = "i am updated box"
// document.querySelector(".box").dataset
let div = document.createElement("div")
div.innerHTML = "inserted"
div.setAttribute("class","created")
document.querySelector(".container").append(div)
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin","I am under the water")

document.querySelector(".container").classList.add("rauf")
document.querySelector(".container").classList.remove("red")
