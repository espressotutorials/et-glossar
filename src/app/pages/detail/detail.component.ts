import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { data } from '../../shared/demo/data';
import { faArrowRight, faChevronRight } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  faLink = faChevronRight;
  faArrow = faArrowRight;

  public demo = data;

  public id!: string;
  public character!: string;

  public section: any;
  public item: any;

  public loading: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute
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
    this.subscriptions.push(
      this.route.params.subscribe( (params: any) => {
        console.log(params);
        this.character = params.character;
        this.id = params.id;
        this.getDemoData(this.id, this.character);
      })
    )
  }

  /**
  * Get dara from demo array
  * @param id type: Number
  * @param character type: String
  */
  getDemoData(id: string, character: string): any {
    this.section = this.demo.find((item: any) => {
      return item.alpha === character;
    });
    if (this.section && this.section.items && this.section.items.length > 0) {
      this.item = this.section.items.find((item: any) => {
        return item.id === parseInt(id);
      });
    }
    this.loading = false;
    console.log(this.item);
    console.log(this.section);
  }

}
