import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  export class ProductsService {
     BASE_URL = "https://fakestoreapi.com/products";
  
    constructor(private http: HttpClient, private router: Router) { }
  
   
    getAllProducts(): Observable<Products[]> {
      return this.http.get<Products[]>(this.BASE_URL);
    }
    getSingleProduct(id) {
      return this.http.get<Products>(this.BASE_URL + `/${id}`)
    }  
  
  }
  