import { Component, OnInit } from '@angular/core';
import { RESULT } from '../mock-search-result';
import { SearchResult } from '../searchresult';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results = RESULT;

  constructor() { }

  ngOnInit() {
  }

  selectedResult: SearchResult;
  onClickTitle(searchResult: SearchResult): void {
    this.selectedResult = searchResult;
  }

}
