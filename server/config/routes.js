var controller = require('./../controller/controller');
module.exports = app => {
  app.post('/api/login', controller.loginReg);
  app.get('/api/questions', controller.getAllQuestions);
  app.post('/api/questions', controller.addQuestion);
  app.get('/api/questions/:id', controller.getSingleQuestion);
  app.delete('/api/questions/:id', controller.deleteQuestion);
  // app.post('/api/options/:id', controller.voteForOption);
}
