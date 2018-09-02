const express = require("express");
const fs = require("fs");
const util = require("util");
const app = express();

const readFile = util.promisify(fs.readFile)
app.listen(8080, ()=>{console.log("app is listning at port 8080!")})

app.get("/", (req, res)=>{
  return readFile("./index.html", "utf8")
  .then((data)=>{return res.send(data)})
  .catch(console.log)
})
