import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() typeOnSearchBoxEvent = new EventEmitter<string>();
  @Output() clickOnSearchButtonEvent = new EventEmitter();
  search = '';

  constructor() { }

  ngOnInit() {
  }

  onSearchBoxType() {
    this.typeOnSearchBoxEvent.emit(this.search);
  }

  onSearchButtonClick() {
    this.clickOnSearchButtonEvent.emit();
  }

}
