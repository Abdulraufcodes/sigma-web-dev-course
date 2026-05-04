const fs = require("fs")

// console.log(fs) 

//this function is synchronous
// console.log("starting")
// fs.writeFileSync("rauf.txt", "Rauf is a good boy");
// console.log("ending")

//this function is Asynchronous
// console.log("starting")
// fs.writeFile("rauf2.txt", "Rauf is good boy2", () => {
//     console.log("done")
// })
// console.log("ending")

//callback hell
// console.log("starting")
// fs.writeFile("rauf2.txt", "Rauf is good boy2", () => {
//     console.log("done")
//     fs.readFile("rauf.txt",(error,data) => {
//         console.log(error,data.toString());
//     })
// })
// console.log("ending")

//append in the file
fs.appendFile("rauf.txt"," and he is a coder",(e,d) => {
    console.log(d)
})
