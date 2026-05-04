console.log('hello world');


//example to use slugify package - slugify converts the text into a valid link format
var slugify = require('slugify')

 let a = slugify('some string*%^@*') // some-string
 console.log(a);
// if you prefer something other than '-' as separator
let b = slugify('some string', '_')  // some_string
console.log(b)