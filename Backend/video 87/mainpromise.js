import { readFile } from "fs"
import fs from "fs/promises"

let a = await fs.readFile("rauf.txt");  //in this await can be without a async function
let b = await fs.appendFile("rauf2.txt","\n he is going to be a great coder")

console.log(a.toString(),b);
