const fs = require('fs');


const data= JSON.parse(fs.readFileSync('1-json.json').toString());

data.name = "Nandan";
data.age = 28;

fs.writeFileSync('1-json.json',JSON.stringify(data));
