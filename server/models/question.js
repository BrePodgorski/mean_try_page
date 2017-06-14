let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let QuestionSchema = new Schema({
  question: {type: String, required: true},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  optionOneText: {type: String, required: true},
  optionOneNumber: {type: Number, required: true},
  optionTwoText: {type: String, required: true},
  optionTwoNumber: {type: Number, required: true},
  optionThreeText: {type: String, required: true},
  optionThreeNumber: {type: Number, required: true},
  optionFourText: {type: String, required: true},
  optionFourNumber: {type: Number, required: true},

  createdAt: {type: Date}

}, {timestamps: true})

mongoose.model('Question', QuestionSchema)
