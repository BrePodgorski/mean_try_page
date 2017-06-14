import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {QuestionComponent} from './question/question.component';
import {QuestionListComponent} from './question/question-list/question-list.component';
import {QuestionNewComponent} from './question/question-new/question-new.component';
import {QuestionShowComponent} from './question/question-show/question-show.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'questions', component: QuestionComponent, children: [
    { path: 'list', component: QuestionListComponent},
    { path: 'add', component: QuestionNewComponent},
    { path: 'show/:id', component: QuestionShowComponent},
    { path: 'questions/:id', component: QuestionListComponent},

  ]},

];
export const routing = RouterModule.forRoot(APP_ROUTES);
