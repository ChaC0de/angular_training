import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }
  public save(json: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/student/save', json,{})
  }
  public search(): Observable<any> {
    return this.http.get<any>
    ('http://localhost:8080/student/search');
  }
  public delete(studentId: number): Observable<any>{
    return this.http.get<any>
    ('http://localhost:8080/student/delete?studentId='+studentId);
  }
}

  
