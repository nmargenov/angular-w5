import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadService {

  private apiUrl = 'https://api.breakingbadquotes.xyz/v1/quotes/10'

  constructor(private http:HttpClient) { }

  get10Quotes(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
