var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
//if user exists we will log them in, if they don't we will create them
module.exports = {
  loginReg: (req, res)=>{
    //try to find user before creating one
    User.findOne({name: req.body.name}, (err, user)=>{
    //if user does not exist
    if(user == null){
      let user = new User(req.body);
      user.save((err, savedUser)=>{
        if(err){
          console.log(err);
          return res.status(500).send("Error in saving user")
        }else{
          req.session.user = savedUser;
          //this is how we use session
          return res.json(savedUser);
        }
      })

    }else{
      //if user does exist
      req.session.user = user;
      return res.json(user);
    }
  })
},

  getAllQuestions: (req, res)=>{
    Question.find({}).populate('_user').exec( (err, questions)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Error getting questions")
      }else{
        console.log(questions);
        return res.json(questions);
      }
    })
  },
  //creating new message and relying on user being in session. Must make somethign saying if user is not in session
  //then they can not create a questions
  addQuestion: (req, res) => {
    if(!req.session.user){
      return res.sendStatus(401);
    }else{
      let question = new Question(req.body);
      //creating new question
      question._user = req.session.user._id;
      //assigning user
      question.save((err, newQuestion)=>{
        if(err){
          console.log(err);
          return res.status(500).send("Error saving questions")
        }else{
          console.log(newQuestion);
          return res.json(newQuestion);
        }
      })
    }
  },
  deleteQuestion: (req, res)=>{

    Question.findOne({_id: req.params.id}, (err, question)=>{
      console.log(req.session.user._id);
      console.log("*******************");
      console.log(question._user);
      if(req.session.user._id == question._user){
        Question.remove({_id: req.params.id}, (err)=>{
        if(err){
          console.log(err);
          return res.status(500).send("Couldn't delete the question")
        }else{
          console.log("it deleted");
          return res.json({status: 'yay'})
        }
      })
    }else{
      return res.status(500).send("This is not your question, you cannot delete it")
    }
  })
},

  getSingleQuestion: (req, res) =>{
    console.log("in the method");
    Question.findOne({_id: req.params.id}, (err, question)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Error finding question")
      }else{
        console.log("*************");
        console.log(question);
        return res.json(question);
      }
    })
  },
  // voteForOption: (req, res) =>{
  //   Option.findOne({_id: req.body._id}, req.body, (err, option)=>{
  //     if(err){
  //       console.log(err);
  //       return res.status(500).send("Error finding question")
  //     }else{
  //       vote+=1
  //       return res.json(option);
  //     }
  //   })
  // }

}
