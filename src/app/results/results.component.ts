import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../searchresult';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: SearchResult[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.getResults();
  }

  getResults(): void {
    this.searchService.getResults()
      .subscribe(results => this.results = results);
  }

  selectedResult: SearchResult;
  onClickTitle(searchResult: SearchResult): void {
    this.selectedResult = searchResult;
  }

}
