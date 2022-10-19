"use strict";(self.webpackChunket_glossar=self.webpackChunket_glossar||[]).push([[698],{3698:(Z,r,o)=>{o.r(r),o.d(r,{HomeModule:()=>H});var l=o(6895),p=o(646),t=o(1571),d=o(9292),m=o(1481),u=o(9885),g=o(1578),h=o(9301),f=o(657),v=o(3517),y=o(9534);function x(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"article",5)(2,"h2",6),t._uU(3),t.qZA(),t._UZ(4,"app-glossar",7),t.qZA(),t.BQk()),2&e){const n=s.$implicit;t.xp6(1),t.Q6J("id",n.char),t.xp6(2),t.Oqu(n.char),t.xp6(1),t.Q6J("section",n)}}const A=[{path:"",component:(()=>{class e{constructor(n,a,i){this.api=n,this.title=a,this.meta=i,this.nav=[],this.data=[],this.subscriptions=[]}ngOnInit(){this.metaService(),this.initData()}ngOnDestroy(){this.subscriptions&&this.subscriptions.length>0&&this.subscriptions.forEach(n=>{n.unsubscribe()})}initData(){const n=document.documentElement.lang;this.subscriptions.push(this.api.getData(`api/glossaries/chars?locale=${n}`).subscribe(a=>{const i=[];a.data.forEach(c=>{"#"!==c.char&&i.push(c)}),this.nav=i},a=>{}))}metaService(){"de"===document.documentElement.lang?(this.title.setTitle("Glossar der SAP Begriffe und Abk\xfcrzungen - Espresso Tutorials bringt Licht ins Dunkel"),this.meta.updateTag({name:"description",content:"Bei uns im SAP Glossar finden Sie alle m\xf6glichen Erklr\xe4ungen rund um das Thema SAP sehr genau erkl\xe4rt. Lesen Sie sich jetzt ein!"})):(this.title.setTitle("Glossary of SAP terms and abbreviations - Espresso Tutorials brings light into the darkness"),this.meta.updateTag({name:"description",content:"In our SAP glossary you will find all possible explanations around the topic SAP explained very precisely. Read in now!"}),this.meta.updateTag({name:"twitter:description",content:"In our SAP glossary you will find all possible explanations around the topic SAP explained very precisely. Read in now!"}),this.meta.updateTag({name:"twitter:title",content:"Glossary of SAP terms and abbreviations - Espresso Tutorials brings light into the darkness"}),this.meta.updateTag({property:"og:description",content:"In our SAP glossary you will find all possible explanations around the topic SAP explained very precisely. Read in now!"}),this.meta.updateTag({property:"og:title",content:"Glossary of SAP terms and abbreviations - Espresso Tutorials brings light into the darkness"}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.s),t.Y36(m.Dx),t.Y36(m.h_))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:9,vars:2,consts:[[1,"w-full"],[3,"nav"],["id","glossar",1,"px-8","py-16","md:py-32"],[4,"ngFor","ngForOf"],[1,"max-w-stage","w-full","mx-auto","my-12","px-0","md:px-4"],[1,"max-w-stage","w-full","mx-auto","my-12","px-0","md:px-4","border-b","border-solid","border-gray-500","pb-4",3,"id"],[1,"text-xl","md:text-3xl","font-semibold","text-gray-800","mb-4","uppercase"],[3,"section"]],template:function(n,a){1&n&&(t._UZ(0,"app-header"),t.TgZ(1,"main",0),t._UZ(2,"app-stage")(3,"app-glossar-navigation",1),t.TgZ(4,"section",2),t.YNc(5,x,5,3,"ng-container",3),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-newsletter"),t.qZA()(),t._UZ(8,"app-footer")),2&n&&(t.xp6(3),t.Q6J("nav",a.nav),t.xp6(2),t.Q6J("ngForOf",a.nav))},dependencies:[l.sg,u.G,g.c,h.O,f.O,v.D,y.E]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(A),p.Bz]}),e})();var T=o(7300),S=o(9594);let H=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,b,T.$,S.$]}),e})()}}]);