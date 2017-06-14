import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';


@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }
//servicegetallquestions
//addQuestionsInService
//deleteQuestionInService
//
addQuestionInService(questionObjectFromComponent){
  return this._http.post('/api/questions', questionObjectFromComponent)
  .map( (responseFromTheServer: Response ) => responseFromTheServer.json())
  .toPromise()
  }
  serviceGetAllQuestions(){
    return this._http.get('/api/questions')
    .map( (responseFromTheServer: Response ) => responseFromTheServer.json())
    .toPromise()
  }
  serviceGetSingleQuestion(theQuestionIdFromTheComponent){
    return this._http.get('/api/questions/' + theQuestionIdFromTheComponent)
    //if you have a json object problem, make sure this has a SLASH in front of it!!
    .map( (responseFromTheServer: Response) => responseFromTheServer.json())
    .toPromise()
  }
  deleteQuestionInService(theQuestionIdFromTheComponent){
    return this._http.delete('/api/questions/' + theQuestionIdFromTheComponent)
    .map( (responseFromTheServer: Response)=> responseFromTheServer.json())
    .toPromise()
  }
}
