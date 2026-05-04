//CRUD operations
use("CrudDb")

// 1.Create

// db.createCollection("courses")

// db.courses.insertOne({
//     name : "Rauf web dev Journey",
//     price : 0,
//     assignment : 12,
//     projects : 45
// })

// db.courses.insertMany([
//     {
//         "name": "Rauf Web Dev Journey",
//         "price": 0,
//         "assignment": 12,
//         "projects": 45
//     },
//     {
//         "name": "Intro to HTML",
//         "price": 0,
//         "assignment": 8,
//         "projects": 12
//     },
//     {
//         "name": "CSS Styling Mastery",
//         "price": 199,
//         "assignment": 15,
//         "projects": 18
//     },
//     {
//         "name": "JavaScript Basics",
//         "price": 299,
//         "assignment": 20,
//         "projects": 22
//     },
//     {
//         "name": "Advanced JavaScript",
//         "price": 399,
//         "assignment": 25,
//         "projects": 30
//     },
//     {
//         "name": "React Essentials",
//         "price": 499,
//         "assignment": 18,
//         "projects": 28
//     },
//     {
//         "name": "Node.js Fundamentals",
//         "price": 399,
//         "assignment": 16,
//         "projects": 24
//     },
//     {
//         "name": "Express.js with MongoDB",
//         "price": 599,
//         "assignment": 22,
//         "projects": 26
//     },
//     {
//         "name": "Fullstack MERN Project",
//         "price": 799,
//         "assignment": 30,
//         "projects": 40
//     },
//     {
//         "name": "Web Deployment & Hosting",
//         "price": 249,
//         "assignment": 10,
//         "projects": 15
//     }
// ]
// )



// 2.Read 

// let a = db.courses.find({price : 0})
// console.log(a)

//returns count
// let a = db.courses.find({price : 0})
// console.log(a.count())

//returns array
// let a = db.courses.find({price : 0})
// console.log(a.toArray())

//find the first instance
// let a = db.courses.findOne({price : 0})
// console.log(a)



// 3.Update

//update the first instance
// db.courses.updateOne({price : 0}, {$set:{price : 100}})

//update all
// db.courses.updateMany({price : 0}, {$set:{price : 1000}})



// 4. DELETE

//delete one
// db.courses.deleteOne({price : 1000})

//delete all
// db.courses.deleteMany({price : 1000})


//for more operations and query
// https://www.mongodb.com/docs/manual/reference/operator/query/

//Greater than or Equal to
// db.courses.find({price : {$gt : 500}})

//logical operations
// db.courses.find({
//     $and : [
//         {assignment : {$lt : 20}},
//         {projects : {$lt : 25}}
//     ]
// })

// db.courses.find({
//     price : {$not : {$gt : 500}}
// })

