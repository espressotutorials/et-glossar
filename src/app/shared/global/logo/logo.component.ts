import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  public logoUrl: string | undefined;
  public logoUrlFallback: string | undefined;

  constructor(
  ) { }

  ngOnInit(): void {
    this.logoUrlFallback = 'assets/logo/espresso-tutorials-logo.svg';
    this.logoUrl = 'assets/logo/espresso-tutorials-logo.svg';
  }

}
