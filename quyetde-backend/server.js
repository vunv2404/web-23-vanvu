const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended : false}));


//add question
app.post('/addquestion' , function(request , respone){
  console.log("incomming Question");
//   Request.on('data', function(data){
//       console.log("Data: " , data + "");   
//   });
  console.log(request.body);
  const questionList =  JSON.parse(fs.readFileSync('question.json' ,{ encoding :'utf-8'}));
  const lastQuestion = questionList[questionList.length -1];

  const question = {
      content : request.body.question,
      yes : 0,
      no : 0,
      id: 0
  }
  if (lastQuestion) {
      question.id = question.id + 1;
  }

  questionList.push(question);

  fs.writeFileSync('question.json' ,JSON.stringify(questionList));

  respone.redirect('http://localhost:5000/chitiet?questionId='+question.id);

});

app.post('/index', function (request , respone) {
    console.log(request.body);
    const questionList =  JSON.parse(fs.readFileSync('question.json' ,{ encoding :'utf-8'}));



    questionList.push(question);

    fs.writeFileSync('question.json' ,JSON.stringify(questionList));
});

app.get('/index', function (request , respone){
    
});


//param
// get -> http://localhost:6789/questioninfo/...
app.get('/questioninfo/:questionId' , function(request , response) {
    console.log(request.params);   
    const questionId = request.params.questionId;
    const questionList =  JSON.parse(fs.readFileSync('question.json' ,{ encoding :'utf-8'}));
    
    const question = questionList.filter(function (questionItem) {
        return questionItem.id == questionId;
    })[0];

    response.send(question);
});

const port = 6789;
app.listen(port, function(err) {
    if(err) console.log(err)
    else console.log("Server start success!");
    
    
})