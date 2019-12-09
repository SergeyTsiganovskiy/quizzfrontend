import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from, Subject } from 'rxjs';

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http: HttpClient) {}

    postQuestion(question){
        this.http.post('http://localhost:54371/api/questions', question).subscribe(res => {
        })
    }

    putQuestion(question){
        this.http.put(`http://localhost:54371/api/questions/${question.id}`, question).subscribe(res => {
        })
    }

    getQuestions(quizId){
        return this.http.get(`http://localhost:54371/api/questions/${quizId}`);
    }

    getQuizzes(){
        return this.http.get('http://localhost:54371/api/quizzes');
    }

    getAllQuizzes(){
        return this.http.get('http://localhost:54371/api/quizzes/all');
    }

    selectQuestion(question){
        this.selectedQuestion.next(question);
    }

    selectQuiz(quiz){
        this.selectedQuiz.next(quiz);
    }

    postQuiz(quiz){
        this.http.post('http://localhost:54371/api/quizzes', quiz).subscribe(res => {
        })
    }

    putQuiz(quiz){
        this.http.put(`http://localhost:54371/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
        })
    }
}