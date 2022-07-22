import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {

  faLanguage = faLanguage;

  public activeLanguage: any;

  constructor(
  ) { }

  ngOnInit(): void {
    this.activeLanguage = 'de';
  }

  select(language: string): void {
  }



}
