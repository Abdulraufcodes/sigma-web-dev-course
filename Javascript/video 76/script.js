// async function hello() {
//     console.log("hello")
// }

// function api() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("got weather data")
//         },2000)
//     });
// }

// // await api();  this cannot be used as await can only be used in async function
// //instead make another async function

// async function getData() {
//     await api(); //1
//     await api(); //2
// }

//previous example
// function getData(dataId) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log('data',dataId);
//             resolve(200)
//         }, 2000);
//     })
// }

// //how to call above function twice one after the other and wait in between = await
// async function getallData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }

//how to call getallData without writing it in the console with the help of IIFE = (function)();

// (async function () {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// })();

//fetch API
const URL = "https://catfact.ninja/fact";

// let response = fetch(URL,Option);
// console.log(response);

//using async await
// const getFact = async () => {
//     console.log('getting data ...');
//     let response = await fetch(URL);          //both the await are used becuz fetch and json returns promise
//     console.log(response)  // response in object format 
//     let data = await response.json(); 
//     console.log(data);   //response in usable format //this will convert the objects in array
    
// }

// //using promises
// function getFacts() {
//     fetch(URL)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data.fact)
//     })
// }


// example of api in real life
let factpara = document.querySelector("#fact")
let btn = document.querySelector("#btn")

const getFact = async () => {
    console.log('getting data ...');
    let response = await fetch(URL);         
    console.log(response) 
    let data = await response.json(); 
    factpara.innerText = data.fact
}

btn.addEventListener("click",getFact)

