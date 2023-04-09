import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from 'src/app/Shared/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  _url:string="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }
  
  GetAllUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Error in server...!");
    }));
  }
}
