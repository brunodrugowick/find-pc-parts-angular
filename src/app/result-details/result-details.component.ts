import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../searchresult';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {

  @Input() selectedResult: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
