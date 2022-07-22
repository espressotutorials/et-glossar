import { Component, OnInit } from '@angular/core';
import { data } from '../../demo/data';

@Component({
  selector: 'app-glossar-navigation',
  templateUrl: './glossar-navigation.component.html',
  styleUrls: ['./glossar-navigation.component.scss']
})
export class GlossarNavigationComponent implements OnInit {

  public nav = data;

  constructor() { }

  ngOnInit(): void {
  }

}
