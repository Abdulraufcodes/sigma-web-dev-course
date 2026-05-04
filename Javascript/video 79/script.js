let a = prompt("enter first number")
let b = prompt("enter second number")

//custom error
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError ("Not a valid number")
}

let sum = parseInt(a) + parseInt(b)

// try {
//     console.log("This is your sum : ", sum *x)
// }catch (error){
//     console.log("there is some error")
// }

function main() {
    try {
        console.log("This is your sum : ", sum *x)
    } catch (error) {
        console.log("there is some error")
    }
    finally {
        console.log("this is running even after a value is returned by a function")
    }
}
let c = main()