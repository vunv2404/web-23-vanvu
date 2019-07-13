const fs  = require('fs');

function getObjfromFile(filePath){
    const fileData = fs.readFileSync(filePath , {encoding:'utf-8'});
    return JSON.parse(fileData);
}

module.exports = {
    getObjfromFile
    // test : 10,
};