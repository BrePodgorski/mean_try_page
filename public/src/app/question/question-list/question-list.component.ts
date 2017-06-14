import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Array<any>;
  constructor(private _questionService:QuestionService) { }

  ngOnInit() {
    this.componentGetAllQuestions();
  }
  componentGetAllQuestions(){
    this._questionService.serviceGetAllQuestions()
    .then((questionsFromServer) => this.questions = questionsFromServer)
    .catch((err) => console.log(err))
  }
  deleteQuestionInComponent(theQuestionIdFromTheComponent){
    this._questionService.deleteQuestionInService(theQuestionIdFromTheComponent)
    .then((response)=>{
      console.log(response);
      this.componentGetAllQuestions();
    })
    .catch((err)=>console.log("There error is", err))
  }

}
