import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  faSearch = faMagnifyingGlass;

  constructor() { }

  ngOnInit(): void {
  }

}
