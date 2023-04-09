import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from 'src/app/Shared/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  _url:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }
  GetAllPosts():Observable<IPost[]> {
    return this.http.get<IPost[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Error in server...!");
    }));
  }
}
