import { Component, OnInit } from '@angular/core';
import { RESULT } from '../mock-search-result';

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

}
