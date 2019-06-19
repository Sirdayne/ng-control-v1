import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpjsonplaceholderService {

  endpoint:string = 'https://jsonplaceholder.typicode.com/todos/' 

  constructor(private http: HttpClient) { }

  getTodos():Observable<object[]> {
    return this.http.get<object[]>(this.endpoint)
  }
}
