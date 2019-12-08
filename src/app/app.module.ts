import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { from } from 'rxjs';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component'; 
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';

const routes = [
   {path: '', component: HomeComponent},
   {path: 'question', component: QuestionComponent},
   {path: 'question/:quizId', component: QuestionComponent},
   {path: 'register', component: RegisterComponent},
   {path: 'quiz', component: QuizComponent}

]

@NgModule({
   declarations: [
      AppComponent,
      QuestionComponent,
      QuestionsComponent,
      HomeComponent,
      NavComponent,
      QuizComponent,
      QuizzesComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatInputModule,
      MatCardModule,
      MatListModule,
      MatToolbarModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      ReactiveFormsModule
   ],
   providers: [
      ApiService,
      AuthService, 
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
