import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../searchresult';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  results: SearchResult[];
  @Input() queryString: string;
  selectedResult: SearchResult;

  ngOnInit() {
    this.getResults();
  }

  getResults(): void {
    if (this.queryString === '') {
      return;
    }
    this.searchService.getResults(this.queryString)
      .subscribe(results => this.results = results);
    // console.log("Subscribed to endpoint.")
  }
  onClickTitle(searchResult: SearchResult): void {
    this.selectedResult = searchResult;
  }
}
