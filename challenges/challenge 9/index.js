let random = Math.random();
console.log(random);
let a = prompt("enter first number");
let c = prompt("enter operator");
let b = prompt("enter second number");

let obj= {
    '+':'-',
    '*':'+',
    '-':'/',
    '/':'*'
}

if(a>0.1) {
    if(c == '+') {
        console.log(a+b);
    }
    else if(c == '-') {
        console.log(a-b);
    }
    else if(c == '*') {
         console.log(a*b);
    }
    else if(c == '/') {
        console.log(a/b);
    }
    else{
        console.log("invalid operator");
    }
    
}
else{
    c = obj[c];

    if(c == '-') {
        console.log(a-b);
    }
    else if(c == '+') {
        console.log(a+b);
    }
    else if(c == '**') {
        console.log(a**b);
    }
    else if(c == '/') {
        console.log(a/b);
    }
    else{
        console.log("invalid operator");
    }

}
