import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService {
    url = 'http://localhost:4200/assets/student.json';
    constructor(private http: Http) {}
    get(): Observable<any> {
        return this.http.get(this.url);
    }
}
