import { Injectable } from '@angular/core';
import { SearchResult } from './searchresult';
import { RESULT } from './mock-search-result';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { template } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getResults(queryString: string): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>('http://localhost:3000/' + queryString);
  }
}
