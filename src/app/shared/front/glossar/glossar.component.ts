import { Component, OnInit } from '@angular/core';
import { data } from '../../demo/data';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-glossar',
  templateUrl: './glossar.component.html',
  styleUrls: ['./glossar.component.scss']
})
export class GlossarComponent implements OnInit {

  faLink = faChevronRight;

  public sections = data;

  constructor() { }

  ngOnInit(): void {
  }

}
