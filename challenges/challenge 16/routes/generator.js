import express from 'express'
import Employee from '../models/employee.js';//import your mongoose model for schema

const router = express.Router() //express.Router() creates a smaller, specialized app just for a certain group of routes.


//arrays 
const names = ["Harry", "Rauf", "John"];
const salaries = [45000, 35000, 50000];
const languages = ["python", "JavaScript", "Java"];
const cities = ["New York", "Berlin", "Milan"];

//function to get random value from array
const getRand = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

//testing for 1 employee
// const employee = {
//     name : getRand(names),
//     salary : getRand(salaries),
//     language : getRand(languages),
//     city : getRand(cities),
//     ismanager : Math.random() <0.5
// }
// console.log(employee);


//Route: generate employees
router.get('/generate', async (req, res) => {
    try {
        // 1.Clear the collection
        await Employee.deleteMany({});

        // 2. Create 10 random employee
        const employees = [];
        for (let i = 0; i < 10; i++) {
            employees.push({
                name: getRand(names),
                salary: getRand(salaries),
                language: getRand(languages),
                city: getRand(cities),
                ismanager: Math.random() < 0.5
            });
        }

        // 3. Insert them into mongoDB
        await Employee.insertMany(employees);
        
        // 4.Send response
        res.send('10 employess generated')

    } catch (err) { 
        console.error(err);
        res.status(500).send('Error genrating employees');
    }
});


export default router; //makes the router available to other file like main.js