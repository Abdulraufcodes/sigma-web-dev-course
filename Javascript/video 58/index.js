// function nice(name) {
//     console.log("hey " + name + " is good");
//     console.log("Hey " + name + " is nice");
//     console.log("Hey " + name + " is punctual");
//     console.log("Hey " + name + " is consistance");

// }

// nice("adnan");

// function sum(a,b) {
//     console.log(a + b);    //to just print the numbers
// }

// sum (3,6);

// function sum(a,b) {
//     return a + b;
// }                              //when you have to store value in a variable
// result = sum(3,6);
// console.log("your sum is : ", result);


// function sum(a , b, c=3) {
//     return a+b+c;
// }
// result= sum(3,6);
// result2= sum(3,6,1);
// console.log("your sum with default parameter is: ",result);
// console.log(result2);  

//practice

let obj = {
    "first name": "rauf",
    "middle name": "abdulmunaf",
    "last name": "shaikh"
}

for (const key in obj) {
    console.log(key, obj);
}