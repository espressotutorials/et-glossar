import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { data } from '../../shared/demo/data';
import { faArrowRight, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { ApiService } from '../../shared/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  faLink = faChevronRight;
  faArrow = faArrowRight;

  public id!: string;
  public character!: string;

  public section: any;

  public item: any;
  public items: Array<any> = [];

  public loading: boolean = false;
  public loadingItems: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
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
    this.loading = true;
    this.loadingItems = true;
    this.subscriptions.push(
      this.route.params.subscribe( (params: any) => {
        console.log(params);
        this.character = params.character;
        this.id = params.id;
        this.getData(this.id, this.character);
      })
    )
  }

  /**
  * Get dara from demo array
  * @param id type: Number
  * @param character type: String
  */
  getData(id: string, character: string): any {
    this.loading = true;
    this.subscriptions.push(
      this.api.getData(`api/glossaries/${id}`).subscribe(
        (res) => {
          console.log(res);
          this.item = res.data;
          this.loading = false;
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.loading = false;
        }
      )
    )
    this.subscriptions.push(
      this.api.getData(`api/glossaries?char=${character}`).subscribe(
        (res) => {
          console.log(res);
          this.items = res.data;
          this.loadingItems = false;
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.loadingItems = false;
        }
      )
    )
  }

}
