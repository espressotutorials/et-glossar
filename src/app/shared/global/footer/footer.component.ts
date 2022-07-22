import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public actualYear: string | undefined;

  constructor(
  ) {}

  ngOnInit(): void {
    this.actualYear = format(new Date(), 'yyyy');
  }

}
