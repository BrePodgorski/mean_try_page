import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//add routing import
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionService } from './question/question.service';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { QuestionShowComponent } from './question/question-show/question-show.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionComponent,
    QuestionListComponent,
    QuestionNewComponent,
    QuestionShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
