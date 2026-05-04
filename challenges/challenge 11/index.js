let n = 5
let arr = []

for (let i=n; i>0; i--) {
    arr.push(i);

}

let factorial = (a,b) => {
    return a*b;
}

console.log(arr.reduce(factorial))