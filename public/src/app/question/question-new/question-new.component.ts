import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {

  constructor(private _questionService: QuestionService, private _router: Router) { }

  ngOnInit() {
  }
  addQuestionInNewComponent(formData){
    this._questionService.addQuestionInService(formData.value)
      .then((response) => {
        console.log(response)
        this._router.navigate(['/questions/list'])
      })
      .catch((err) => console.log(err) )
      formData.reset()
  }
}
