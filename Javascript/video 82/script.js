//destructuring

//this will only store the first two value
// let [x,y] = [3,7,1]
// console.log(x,y)

//this will store the additional numbers in rest 
// let [x, y, ...rest] = [1,2,3,4,5,6,7];
// console.log(x,y,rest)



// let obj = {
//     a : 1,
//     b : 2,
//     c : 3
// };


// removes a,b from obj
// let {a,b} = obj
// console.log(a,b)

// spread syntax
// function sum (a, b, c) {
// return a+b+c;
// }

// let arr = [5,2,3];
// console.log(sum(arr[0], arr[1], arr[2]));
// //same as above - basically spreads the array
// console.log(sum(...arr))


// // quiz - determine the outcome
// const a = "the", b = "no"
// const c = {a, b}
// console.log(c)


// Hoisting
//this will not show error but the value of a1 will be undefine. Basically a1 will be initialized before console statement but value will not be given
// console.log(a1)
// var a1 = 6;

// // Hoisting for functions
// hello("rauf")

// function hello(name) {
//     return console.log(name)
// }

//practice set
//1
// async function practice(word) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log(word);
//             resolve();
//         }, 2000);
//     });
// }

// (async function printing() {
//     await practice("hello")
//     await practice("world")
// })();

//2


// (function average() {
//     function sum(...nums) {
//     return a+b;
// }
//     let arr = [1, 2, 3, 4, 5];
//     let [...rest] = [1, 2, 3, 4, 5];
//     let total = sum(...arr);
//     let average = parseFloat(total/arr.length);
//     console.log(average);
//     console.log(total);

// })();

//second attempt of 2
// function average(...nums) {
//     let total = 0;
//     for(let num of nums) {
//         total += num;
//     }
//     let avg = total/nums.length;
//     return avg;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(average(...arr));

//3

// (async function timer() {
//     let n = prompt("enter a number") 

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log(`your function has been called after ${n} seconds`);
//             resolve();
//         }, n*1000);
        
//     })

// })();

//4
(function calculator() {
    let P = prompt("Enter principle amount :");
    let R = prompt("Enter Rate of interest :");
    let T = prompt("Enter Time period :");

    return console.log("Your Simple interest is : ",(P * R * T) / 100);

})();





