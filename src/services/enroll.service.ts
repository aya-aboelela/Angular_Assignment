import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Shared/User';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  _url:string = "http://localhost:3000/enroll"

  constructor(private http:HttpClient) { }
  enroll(user:User){
    return this.http.post(this._url, user);
  }
}
