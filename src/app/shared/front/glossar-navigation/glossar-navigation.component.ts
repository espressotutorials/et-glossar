import { Component, OnInit } from '@angular/core';
import { data } from '../../demo/data';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-glossar-navigation',
  templateUrl: './glossar-navigation.component.html',
  styleUrls: ['./glossar-navigation.component.scss']
})
export class GlossarNavigationComponent implements OnInit {

  public nav = data;

  constructor(
    private scroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  /**
   * Scroll to book section
   * @param section type: string
   */
  scrollTo(section: string): void {
    this.scroller.scrollToAnchor(section);
  }

}
