import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';

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
    private api: ApiService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.metaService();
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
    const lang = document.documentElement.lang;
    this.subscriptions.push(
      this.api.getData(`api/glossaries/chars?locale=${lang}`).subscribe(
        (res) => {
          const data: Array<any> = [];
          res.data.forEach((el: any) => {
            if (el.char !== '#') {
              data.push(el);
            }
          })
          this.nav = data;
        },
        (err: HttpErrorResponse) => {
        }
      )
    )
  }

  metaService(): void {
    const lang = document.documentElement.lang;
    if (lang === 'de') {
      this.title.setTitle('Glossar der SAP Begriffe und Abkürzungen - Espresso Tutorials bringt Licht ins Dunkel');
      this.meta.updateTag({name: 'description', content: "Bei uns im SAP Glossar finden Sie alle möglichen Erklräungen rund um das Thema SAP sehr genau erklärt. Lesen Sie sich jetzt ein!"});
    } else {
      this.title.setTitle('Glossary of SAP terms and abbreviations - Espresso Tutorials brings light into the darkness');
      this.meta.updateTag({name: 'description', content: "In our SAP glossary you will find all possible explanations around the topic SAP explained very precisely. Read in now!"});
      this.meta.updateTag({name: 'twitter:description', content: "In our SAP glossary you will find all possible explanations around the topic SAP explained very precisely. Read in now!"});
      this.meta.updateTag({name: 'twitter:title', content: "Glossary of SAP terms and abbreviations - Espresso Tutorials brings light into the darkness"});
      this.meta.updateTag({property: 'og:description', content: "In our SAP glossary you will find all possible explanations around the topic SAP explained very precisely. Read in now!"});
      this.meta.updateTag({property: 'og:title', content: "Glossary of SAP terms and abbreviations - Espresso Tutorials brings light into the darkness"});
    }
  }

}
