import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IProduct } from 'src/app/Shared/Iproduct';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  _url:string="../assets/Data/products.json";
  // productId:number;
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  //  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
  //   this.productId =Number( params.get("id"));
  //   if(this.productId){
  //     this.GetProductById(this.productId);
  //   }
  //  })
  }

  GetAllProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Error in server...!");
    }));
  }

    // Get one product
  // Since we are working with a json file, we can only retrieve all products
  // So retrieve all products and then find the one we want using 'map'
  GetProductById(id:number):Observable<IProduct | undefined> {
    return this.GetAllProducts().pipe(map((products:IProduct[])=>products.find(p=>p.ID ==id)),
    catchError((err)=>{
      return throwError(()=>err.message || "Error in server...!");
    }));
  }
}
