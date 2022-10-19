import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  public data: Array<any> = [];
  public char: any = '';

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
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
    this.subscriptions.push(
      this.route.params.subscribe(
        (params) => {
          this.char = {char: params['character']};
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
