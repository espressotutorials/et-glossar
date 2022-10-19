import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public nav: Array<any> = [];
  public data: Array<any> = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach((subscription) => {
        subscription.unsubscribe();
      });
    }
  }

  initData(): void {
    this.subscriptions.push(
      this.api.getData('api/glossaries/chars').subscribe(
        (res) => {
          this.nav = res.data;
        },
        (err: HttpErrorResponse) => {
        }
      )
    )
  }

}
