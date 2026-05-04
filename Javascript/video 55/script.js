console.log("Hello world")

var a = 5;
var b = 6;
var c = "Rauf";
// var 55a = "rauf"; // not allowed

console.log(a  + b); 
console.log(a  + b  + 3); 

console.log(typeof a, typeof b, typeof c);

// const a1 = 6;
// a1 = a1 + 1 ;  //this is  not allowed as the variable is constant

let x = "rauf";
let y = 22;
let z  = 35.3;
let p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q,typeof r)

//object
// name is called key and rauf is called the value
let o = {
    name : "rauf",  //double quotes is not used in name as there is no space it can be written in double quotes
    "job code" : 5600, //double quotes is used in job code as there is space
    "is handsome" : true
}
console.log(o)

o.salary = "100 Mill";

console.log(o)

o.salary = "500 Mill";

console.log(o)

//practice 

let student = {
    name: "rauf",
    "phone number" : 356343,
    CGPA : 9.92
}
console.log(student)

let dgt = "shaikh2";

console.log(dgt )
console.log(typeof dgt)
