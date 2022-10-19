import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
  }

  ngOnInit(): void {
    this.metaService();
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
      this.meta.updateTag({name: 'og:description', content: "In our SAP glossary you will find all possible explanations around the topic SAP explained very precisely. Read in now!"});
      this.meta.updateTag({name: 'og:title', content: "Glossary of SAP terms and abbreviations - Espresso Tutorials brings light into the darkness"});
    }
  }
}
