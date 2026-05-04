// object
//const student = {
//     fullname : "rauf",  //this is a property
//     marks : 54,
//     printmarks : function() {
//         console.log("marks = ",this.marks)
//     }
// }

// const employee = {
//     calcTax() {
//         console.log('10%');
//     }
// }

// const karan = {
//     salary : 50000
// }

// //to add calcTax to karan
// karan.__proto__ = employee

// if both had the same function
// const employee = {
//     calcTax() {
//         console.log('10%');
//     }
// };

// const karan = {
//     salary : 50000,
//     calcTax() {
//         console.log('30%');
//     }
// }

// karan.__proto__ = employee

//classes

// class toyota{
//     starts() {
//         console.log("it can start");
//     }

//     stop() {
//         console.log("it can stop");
//     }

//     setbrand(brand) {
//         this.brandName = brand;   //'this' means the object
//     }
// }

// let fortuner = new toyota();
// fortuner.brandName = "Ferari"
// let hyrider = new toyota();

//constructor
// class toyota{
//     constructor(){
//         console.log("car is created")
//     }
// }

// let fortuner = new toyota();
// console.log("fortuner created");
// let camry = new toyota();
// console.log("camry created");

//inheritance
// class person {
//     eats() {
//         console.log("eats")
//     }
// }

// class engineer extends person {
//     works() {
//         console.log("works")
//     }
// }

// let rauf = new engineer();

//super

// class person {
//     constructor(name) {
//         this.species = "homo sapiens"
//         this.name;
//     }
//     eats() {
//         console.log("eats")
//     }
// }

// class engineer extends person {
//     constructor(name) {
//         super(name)
//     }
//     works() {
//         super.eats()
//         console.log("works")
//     }
// }
// let engiobj = new engineer("rauf")

//getter and setters

class User {
    constructor(name) {
        //invokes the setter
        this.name = name
    }

    get name() {
        return this._name
    }

    set name (value){
        if(value.length < 4) {
            console.log("name is too short")
            return;
        }
        this._name = value;
    }
}

let user = new User("John")
console.log(user.name);
//setting property of existing object, this will run the set function
let newuser = new u





