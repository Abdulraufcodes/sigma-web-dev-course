import fs from "fs";
import fsp from "fs/promises"
import path from "path";

const basepath = "C:\\Users\\AbdulRauf\\Sigma web dev course\\challenges\\challenge 15 B";

let files = await fsp.readdir(basepath)


for (const item of files) {
  console.log("running for :", item)

  let ext = item.split(".")[item.split(".").length - 1];


  // console.log(ext)
  if (ext != "js" && ext != "json" && item.split(".").length > 1) {
    if (fs.existsSync(path.join(basepath, ext))) {
      // Move the file to this directory if its not a js or json file
      fs.renameSync(path.join(basepath, item), path.join(basepath, ext, item));
    }
    else {
      fs.mkdirSync(ext);
      fs.renameSync(path.join(basepath, item), path.join(basepath, ext, item));
    }
  }
}
