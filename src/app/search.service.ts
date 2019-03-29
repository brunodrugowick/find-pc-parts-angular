import { Injectable } from '@angular/core';
import { SearchResult } from './searchresult';
import { RESULT } from './mock-search-result';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getResults(): Observable<SearchResult[]> {
    return of(RESULT);
  }
}
