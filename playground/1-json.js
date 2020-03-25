const fs = require("fs");

const data = JSON.parse(fs.readFileSync("1-json.json").toString());
console.log(data);
data.name = "Renato";
data.age = 37;

const newDataJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", newDataJSON);
