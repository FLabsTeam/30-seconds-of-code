const testFolder = './docs/';
const fs = require('fs');

var nav = [];
fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
    var obj = {}
    obj[file.split(".").shift()] = file
    nav.push(obj);
});
console.log(JSON.stringify(nav));