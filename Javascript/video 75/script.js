// function sum (a,b) {
//     console.log(a+b);
    
// }

// function calculator (a,b,sumCallback) {
//     sumCallback(a,b);
// }
// calculator(5,2,sum)


// function getData(dataId,getnextData) {
//     setTimeout(()=>{
//         console.log("data", dataId)
//         if(getnextData) {
//             getnextData();
//         }
//     },2000);
// }

//callback hell
// getData(1,() => {
//     getData(2,() => {
//         getData(3);
//     });
// });

//promises

// let promise = new Promise((resolve,reject) => {
//     console.log('I am a promise');
//     // resolve(123);
//     reject("Some error occured");
// })

// function getData(dataId,getnextData) {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//         console.log("data", dataId)
//         resolve("success");
//         if(getnextData) {
//             getnextData();
//         }
//     },5000);
//     })
// }
// getData(123);


// how to use promises
// const getpromise = () => {
//         return new Promise((resolve,reject) => {
//         console.log('I am a promise');
//         // resolve("124");
//         reject("network error");
//     })
// }

// //use '.then' to use resolve
// let promise = getpromise();
// promise.then((res) => {            //res=result in the promise
//     console.log("promise fulfilled");
// })

// // if we get error we use .catch
// promise.catch((err) => {           //err = error in the promise
//     console.log("promise rejected",err);
// })


//promise chaining
// function asyncfun1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     })
// }
// function asyncfun2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success")
//         },4000);
//     })
// }
// console.log("fetching data1 ....");
// asyncfun1().then(()=> {
//     console.log('fetching data2 ....');
//     asyncfun2().then(()=> {})
// })

//promise chaining for getdata function
// function getData(dataId) {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//         console.log("data", dataId)
//         resolve("success");
//     },2000);
//     })
// }
// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res)
//     })

// 6 static methods of promise class
// function p1(username) {
//     return new Promise((resolve,reject) => {
//         let a = Math.random()
//         if(a<0.5){
//             reject("error : random number not supporting")
//         }else{

//             setTimeout(() => {
//                 console.log("username :",username);
//                 resolve("success");
//             },2000);
//         }
//     });
// }
// function p2(password) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("password :",password);
//             resolve();
//         },4000);
//     });
// }

// p1(321).then((res) =>{
//     console.log(res);
    
// }).catch((err) => {
//     console.log(err);
    
// }).then(() =>{
//     return p2(123);
// })
// console.log(Promise.race([p1,p2]))

//async and await

async function hello() {
    console.log('hello');
}
// hello();  //write in console and it will return a promise
