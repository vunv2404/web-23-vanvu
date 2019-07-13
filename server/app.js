const express = require('express');
const app = express();

// router
app.get('/' , function(require , respone){
    console.log(__dirname);
    respone.sendFile(__dirname + '/buoi1/index.html');
//     respone.send("<h1> Home page </h1>");
})
 // router
// app.get('style.css' , function(req , res) {
//     res.sendFile(__dirname + '/buoi1/style.css');
// });

app.use(express.static('buoi1'));

const port = 6969;

app.listen(port , function(err) {
    if (err) console.log(err)
    else console.log("Server start success!!");
})