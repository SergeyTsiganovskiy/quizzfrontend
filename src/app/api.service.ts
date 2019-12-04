import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    postQuestion(question){
        this.http.post('http://localhost:54371/api/questions', question).subscribe(res => {
            console.log(res);
        })
    }
}