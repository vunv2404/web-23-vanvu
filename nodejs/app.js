// console.log("hello world");

// const fs = require('fs');

// fs.readFile('data.txt' , {encoding :'utf-8'} , function(err , data) {
//     if(err) console.log('fail')
//     else console.log('success ' , data); 
// });

// console.log('data Sync : ' ,fs.readFileSync('dataSync.txt' , {encoding:'utf-8' }));

// console.log("After write file" , new Date().valueOf());

const obj= {
    name: "VU",
    age : 20
}

console.log(obj);

// const fs = require('fs');

// fs.writeFileSync('dataObj.txt',JSON.stringify(obj));

// const filedata = fs.readFileSync('dataObj.txt' , {encoding: 'utf-8'});
// const filedataObj = JSON.parse(filedata);

const getObj = require('./module').getObjfromFile;

const filedataObj = getObj('dataObj.txt')
console.log("toi la: "+ filedataObj.name + "," +" tuoi: "+ filedataObj.age );
