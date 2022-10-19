import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { faArrowRight, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { ApiService } from '../../shared/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';

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
    private api: ApiService,
    private title: Title,
    private meta: Meta
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
    const lang = document.documentElement.lang;
    this.loading = true;
    this.subscriptions.push(
      this.api.getData(`api/glossaries/${id}?locale=${lang}`).subscribe(
        (res) => {
          this.item = res.data;
          this.loading = false;
        },
        (err: HttpErrorResponse) => {
          this.loading = false;
        }
      )
    )
    this.subscriptions.push(
      this.api.getData(`api/glossaries?char=${character}&locale=${lang}`).subscribe(
        (res) => {
          this.items = res.data;
          this.metaService(this.item.title, this.item.example);
          this.loadingItems = false;
        },
        (err: HttpErrorResponse) => {
          this.loadingItems = false;
        }
      )
    )
  }

  metaService(title: string, example: string): void {
    const lang = document.documentElement.lang;
    if (lang === 'de') {
      this.title.setTitle(`${title} / ${example} - Glossar der SAP Begriffe und Abkürzungen - Espresso Tutorials bringt Licht ins Dunkel`);
      this.meta.updateTag({name: 'description', content: `${title} / ${example} - In our SAP glossary you will find all possible explanations around the topic SAP explained very precisely. Read in now!`});
      this.meta.updateTag({property: 'og:title', content: `${title} / ${example} - Glossar der SAP Begriffe und Abkürzungen - Espresso Tutorials bringt Licht ins Dunkel`});
      this.meta.updateTag({name: 'twitter:title', content: `${title} / ${example} - Glossar der SAP Begriffe und Abkürzungen - Espresso Tutorials bringt Licht ins Dunkel`});
    } else {
      this.title.setTitle(`${title} / ${example} - Glossary of SAP terms and abbreviations - Espresso Tutorials brings light into the darkness`);
      this.meta.updateTag({name: 'description', content: `${title} / ${example} - In our SAP glossary you will find all possible explanations around the topic SAP explained very precisely. Read in now!`});
      this.meta.updateTag({name: 'twitter:description', content: `${title} / ${example} - In our SAP glossary you will find all possible explanations around the topic SAP explained very precisely. Read in now!`});
      this.meta.updateTag({name: 'twitter:title', content: `${title} / ${example} - Glossary of SAP terms and abbreviations - Espresso Tutorials brings light into the darkness`});
      this.meta.updateTag({property: 'og:description', content: "In our SAP glossary you will find all possible explanations around the topic SAP explained very precisely. Read in now!"});
      this.meta.updateTag({property: 'og:title', content: `${title} / ${example} - Glossary of SAP terms and abbreviations - Espresso Tutorials brings light into the darkness`});
    }
  }
}
