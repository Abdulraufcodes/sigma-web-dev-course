// 1. The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["shubh", "anajali", "Shivani", "Shivangi", "Annapurna", "Shubham", "Krishnanendu", "Ravindranathan", "Shivesh", "kaif", "Emanuel"]

let Gryffindor = [];
let Hufflepuff = [];
let Ravenclaw = [];
let Slytherin = [];

for(let name of students) {
    if(name.length < 6) {
        Gryffindor.push(name);
    }
    else if(name.length < 8 && name.length > 6) {
        Hufflepuff.push(name);
    }
    else if (name.length < 12 && name.length > 8) {
        Ravenclaw.push(name);
    }
    else {
        Slytherin.push(name);
    }
}

console.log("Gryffindor : ",...Gryffindor);
console.log("Hufflepuff : ",...Hufflepuff);
console.log("Ravenclaw : ",...Ravenclaw);
console.log("Slytherin : ",...Slytherin);



