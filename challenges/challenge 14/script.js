//first aproach
// let btn = document.querySelector("#btn")

// const para1 = document.querySelector("#para1")
// const para2 = document.querySelector("#para2")
// const para3 = document.querySelector("#para3")
// const para4 = document.querySelector("#para4")
// const para5 = document.querySelector("#para5")


// // async function p1() {
// //     setTimeout(() => {
// //         para1.innerText = "Initializing Hacking"
// //     },time)

// // }

// const para = () => {
//     let time = Math.floor(1 + Math.random() * 6) * 1000
//     setTimeout(() => {
//         document.querySelector("#para1").innerText = "Initializing Hacking"
//     },time)

//     time = Math.floor(1 + Math.random() * 6) * 1000
//     setTimeout(() => {
//         document.querySelector("#para2").innerText = "Reading you files"
//     },time)

//     time = Math.floor(1 + Math.random() * 6) * 1000
//     setTimeout(() => {
//         document.querySelector("#para3").innerText = "Password files detected"
//     },time)

//     time = Math.floor(1 + Math.random() * 6) * 1000
//     setTimeout(() => {
//         document.querySelector("#para4").innerText = "Sending all passwords and private file to server"
//     },time)

//     time = Math.floor(1 + Math.random() * 6) * 1000
//      setTimeout(() => {
//         document.querySelector("#para5").innerText = "Clean up"
//     },time)
// }





// const p1 = async () =>  {
//     setTimeout(() => {
//         document.querySelector("#para1").innerText = "Initializing Hacking"
//     },time)
// }


//  time = Math.floor(1 + Math.random() * 6) * 1000
// const p2 = async () => {
//     setTimeout(() => {
//         document.querySelector("#para1").innerText = "Reading you files"
//     },time)
// }

//  time = Math.floor(1 + Math.random() * 6) * 1000
// const p3 = async () => {
//     setTimeout(() => {
//         document.querySelector("#para1").innerText = "Password files detected"
//     },time)
// }

//  time = Math.floor(1 + Math.random() * 6) * 1000
// const p4 = async () => {
//      setTimeout(() => {
//         document.querySelector("#para1").innerText = "Sending all passwords and private file to server"
//     },time)
// }

//  time = Math.floor(1 + Math.random() * 6) * 1000
// const p5 = async () => {
//      setTimeout(() => {
//         document.querySelector("#para1").innerText = "Clean up"
//     },time)
// }

// btn.addEventListener("click" , p1)





//chatgpt aproach
// let btn = document.querySelector("#btn")

// const wait = (time) => {
//     return new Promise ((resolve) => {setTimeout(resolve,time)})
// }

// const para = async() => {

//     document.body.style.backgroundColor = "Green";

//     btn.hidden = true;

//     let time = Math.floor (1+Math.random() * 6) * 1000;
//     await wait(time)
//     document.querySelector("#para1").innerText = "Initializing Hacking..."

//     time = Math.floor (1+Math.random() * 6) * 1000;
//     await wait(time)
//     document.querySelector("#para2").innerText = "Reading you files..."

//     time = Math.floor (1+Math.random() * 6) * 1000;
//     await wait(time)
//     document.querySelector("#para3").innerText = "Password files detected..."

//     time = Math.floor (1+Math.random() * 6) * 1000;
//     await wait(time)
//     document.querySelector("#para4").innerText = "Sending all passwords and private file to server..."

//     time = Math.floor (1+Math.random() * 6) * 1000;
//     await wait(time)
//     document.querySelector("#para5").innerText = "Clean up..."
// }

// btn.addEventListener("click",para);




// code with harry
const addItem = async (item) => {
    // document.body.style.backgroundColor = "green"
    await delay();
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div)
}

const delay = () => {
    return new Promise((resolve) => {
        time = (1 + 6 * Math.random()) * 1000
        setTimeout(() => {
            resolve()
        }, time);
    })
};

async function main() {

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div")
        last = last[last.length-1]
        if(last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
        }else {
            last.innerHTML = last.innerHTML + "."
        }
    },100);

    let text = ["Initializing Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"];

    for (const item of text) {
        await addItem(item);
    }

    await delay()
    clearInterval(t)
}

main()


