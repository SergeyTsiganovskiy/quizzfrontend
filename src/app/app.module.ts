import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { from } from 'rxjs';
import { ApiService } from './api.service';

@NgModule({
   declarations: [
      AppComponent,
      QuestionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatInputModule,
      MatCardModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [ApiService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
