const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb://localhost:27017/quyet-de-23',function (err) {
    if (err) {
        console.log(err);
    }
    else console.log("connect to DB success!"); 
});
const QuestionModel = require('./models/question');

// find many : QuestionModel.find({})
//find one : QuestionModel.findOne({})
// find by id: QuestionModel.findbyid(id)
//create: QuestionModel.create({feild1 : value1 ,feild2 : value2 , ...})
// find and update: QuestionModel.findOneAndUpdate({},{})
//find and delete QuestionModel.findOneAndDelete({},{})
// find By Id And Remove QuestionModel.findByIdAndRemove({},{});

 
app.use(cors());
app.use(bodyParser.urlencoded({ extended : false}));


//add question
app.post('/addquestion' , function(request , respone){
//  console.log("incomming Question");
//   Request.on('data', function(data){
//       console.log("Data: " , data + "");   
//   });
//   console.log(request.body);
//   const questionList = JSON.parse(fs.readFileSync('question.json' ,{ encoding :'utf-8'}));
//   const lastQuestion = questionList[questionList.length -1]; 
//   const question = {
//       content : request.body.question,
//       yes : 0,
//       no : 0,
//       id: 0
//     }
//     if (lastQuestion) {
//       question.id = question.id + 1;
//   }
//   questionList.push(question);
//   fs.writeFileSync('question.json' ,JSON.stringify(questionList));
//   respone.redirect('http://localhost:5000/chitiet?questionId='+question.id);

    QuestionModel.create({ 
    content : request.body.question
    }).then(function (questionCreated) {
        respone.redirect('http://localhost:5000/chitiet?questionId='+questionCreated._id);
    }).catch(function(err){
        console.log(err);     
    });
});

// add vote    
app.post('/vote/:questionId', function (request , respone) {
    // const questionList =  JSON.parse(fs.readFileSync('question.json' ,{ encoding :'utf-8'})); 
    // for (let i = 0; i < questionList.length; i++) {
    //     // console.log(questionId, questionList[i].id);
    //     if (questionList[i].id == questionId) {
    //         if (vote == 'yes') {
    //             questionList[i].yes += 1;
    //         } else {
    //             questionList[i].no += 1;
    //         }
    //     }
    // }
    // fs.writeFileSync('question.json' ,JSON.stringify(questionList));
    //respone.redirect('http://localhost:5000/chitiet?questionId='+ questionId);
    const vote = request.body.vote;
    const questionId = request.params.questionId;
    QuestionModel.findByIdAndUpdate(questionId).then(function (question){
        if (question._id == questionId) {
            if (vote == 'yes') {
                question.yes += 1;
            } else {
                question.no += 1;
            }
            question.save();
        }
        
        console.log(question);
        
        respone.redirect('http://localhost:5000/chitiet?questionId='+ questionId);
    }).catch(function (err) {
        console.log("ERROR: ",err);
    });
});

app.get('/randomquestion', function (request , respone){
// get -> http://localhost:6789/randomquestion/...
    // QuestionModel.find({}).then(function(questions) {
    //     const randomIndex = Math.floor(Math.random()*questions.length);
    //     const randomquestion = questions[randomIndex];
    //     respone.send(randomquestion);
    // }).catch(function(err) {
    //     console.log("ERROR: " ,err);
    // })

    // const questionList =  JSON.parse(fs.readFileSync('question.json' ,{ encoding :'utf-8'}));
    // const randomIndex = Math.floor(Math.random()*questionList.length);
    // const randomquestion = questionList[randomIndex];

    QuestionModel.count({}).then(function(totalQuestion){
        QuestionModel.findOne({}).skip(Math.floor(Math.random()*totalQuestion))
        .then(function(question){
            respone.send(question);
        })
    })    
});


//param
// get -> http://localhost:6789/questioninfo/...
app.get('/questioninfo/:questionId' , function(request , response) {
    console.log(request.params);   
    const questionId = request.params.questionId;
    QuestionModel.findById(questionId).then(function (question) {
        response.send(question)
    }).catch(function (err) {
        console.log("ERROR: " ,err);
    })
    // const questionList =  JSON.parse(fs.readFileSync('question.json' ,{ encoding :'utf-8'}));    
    // const question = questionList.filter(function(questionItem){
    //     return questionItem.id == questionId;
    // })[0];
    // response.send(question);
});

const port = 6789;
app.listen(port, function(err) {
    if(err) console.log(err)
    else console.log("Server start success!");   
})