import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { ResultsComponent } from './results/results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Find PC Parts';
  search = '';

  @ViewChild(ResultsComponent)
  private resultsComponent: ResultsComponent;

  /**
   * Every time the search box is modified, this is called
   * and updates the query variable. At some point it emits
   * an event to be handled by the SearchService.
   * 
   * @param $query
   */
  typeOnSearchBoxEventHandler($query: any) {
    this.search = $query;
    // console.log(this.search);
  }

  clickOnSearchButtonEventHandler() {
    this.resultsComponent.getResults();
  }
}
