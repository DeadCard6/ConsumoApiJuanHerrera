import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../model/category';

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
  
    private UrlApi: String = 'https://mystoreapi.com';
    constructor(private _httpClient: HttpClient) { }
  
    public getData(): Observable<category[]>{
      return this._httpClient.get<category[]>(`${this.UrlApi}/catalog/categories`);
  
    }
  
  }