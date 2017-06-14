import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
//import router
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-question-show',
  templateUrl: './question-show.component.html',
  styleUrls: ['./question-show.component.css']
})
export class QuestionShowComponent implements OnInit {
  question: any;
  question_id: String;

  constructor(private _questionService:QuestionService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
        //when somethign changes, this page is notified
        this.question_id = param.id;
      })
      this.componentGetSingleQuestion(this.question_id)

}
componentGetSingleQuestion(theIdFromTheUrl){
  console.log(theIdFromTheUrl);
  this._questionService.serviceGetSingleQuestion(theIdFromTheUrl)
  .then((questionFromServer)=> this.question = questionFromServer)
  .catch((err)=> console.log(err))
  }
  voteOptionInComponent
}
