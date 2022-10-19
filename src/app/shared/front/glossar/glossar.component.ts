import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  faArrowLeft,
  faArrowRight,
  faArrowToLeft,
  faArrowToRight,
  faChevronRight
} from '@fortawesome/pro-solid-svg-icons';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-glossar',
  templateUrl: './glossar.component.html',
  styleUrls: ['./glossar.component.scss']
})
export class GlossarComponent implements OnInit, OnDestroy {
  public data: Array<any> = [];
  public loading: boolean = true;
  public loader = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  public meta: any;

  faLink = faChevronRight;
  faArrow = faArrowRight;
  faNext = faArrowRight;
  faPrevious = faArrowLeft;
  faStart = faArrowToLeft;
  faEnd = faArrowToRight;

  @Input() section: any;
  @Input() navigation: boolean = false;

  private currentPage = 1;
  private subscriptions: Subscription[] = [];
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.initData(this.section.char, 1);
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach((subscription) => {
        subscription.unsubscribe();
      });
    }
  }

  initData(char: string, page: number): void {
    this.subscriptions.push(
      this.api.getData(`api/glossaries?char=${char}&page=${page}`).subscribe(
        (res) => {
          this.data = res.data;
          if (this.navigation) {
            this.meta = res.meta;
          }
          this.loading = false;
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.loading = false;
        }
      )
    )
  }

  // Get new data by page
  pagination(type: string): void {
    if ('prev' === type) {
      const newPage = this.meta.current_page - 1;
      this.currentPage = newPage;
      if (newPage < 1) {
        return;
      }
      this.initData(this.section.char,newPage);
    } else if ('next' === type) {
      const newPage = this.meta.current_page + 1;
      this.currentPage = newPage;
      if (newPage >= this.meta.total) {
        return;
      }
      this.initData(this.section.char,newPage);

    } else if ('start' === type) {
      const newPage = 1;
      this.currentPage = newPage;
      this.initData(this.section.char,newPage);

    } else {
      const newPage = this.meta.last_page;
      this.currentPage = newPage;
      this.initData(this.section.char,newPage);
    }
  }

}
