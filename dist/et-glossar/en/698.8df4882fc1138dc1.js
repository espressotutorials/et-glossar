"use strict";(self.webpackChunket_glossar=self.webpackChunket_glossar||[]).push([[698],{3698:(A,i,s)=>{s.r(i),s.d(i,{HomeModule:()=>M});var r=s(6895),m=s(646),o=s(1571),l=s(9292),u=s(9885),d=s(1578),g=s(9301),h=s(657),f=s(3517),v=s(9534);function x(t,a){if(1&t&&(o.ynx(0),o.TgZ(1,"article",5)(2,"h2",6),o._uU(3),o.qZA(),o._UZ(4,"app-glossar",7),o.qZA(),o.BQk()),2&t){const n=a.$implicit;o.xp6(1),o.Q6J("id",n.char),o.xp6(2),o.Oqu(n.char),o.xp6(1),o.Q6J("section",n)}}const y=[{path:"",component:(()=>{class t{constructor(n){this.api=n,this.nav=[],this.data=[],this.subscriptions=[]}ngOnInit(){this.initData()}ngOnDestroy(){this.subscriptions&&this.subscriptions.length>0&&this.subscriptions.forEach(n=>{n.unsubscribe()})}initData(){const n=document.documentElement.lang;this.subscriptions.push(this.api.getData(`api/glossaries/chars?locale=${n}`).subscribe(e=>{const p=[];e.data.forEach(c=>{"#"!==c.char&&p.push(c)}),this.nav=p},e=>{}))}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(l.s))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-home"]],decls:9,vars:2,consts:[[1,"w-full"],[3,"nav"],["id","glossar",1,"px-8","py-16","md:py-32"],[4,"ngFor","ngForOf"],[1,"max-w-stage","w-full","mx-auto","my-12","px-0","md:px-4"],[1,"max-w-stage","w-full","mx-auto","my-12","px-0","md:px-4","border-b","border-solid","border-gray-500","pb-4",3,"id"],[1,"text-xl","md:text-3xl","font-semibold","text-gray-800","mb-4","uppercase"],[3,"section"]],template:function(n,e){1&n&&(o._UZ(0,"app-header"),o.TgZ(1,"main",0),o._UZ(2,"app-stage")(3,"app-glossar-navigation",1),o.TgZ(4,"section",2),o.YNc(5,x,5,3,"ng-container",3),o.qZA(),o.TgZ(6,"div",4),o._UZ(7,"app-newsletter"),o.qZA()(),o._UZ(8,"app-footer")),2&n&&(o.xp6(3),o.Q6J("nav",e.nav),o.xp6(2),o.Q6J("ngForOf",e.nav))},dependencies:[r.sg,u.G,d.c,g.O,h.O,f.D,v.E]}),t})()}];let H=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[m.Bz.forChild(y),m.Bz]}),t})();var Z=s(7300),C=s(9594);let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[r.ez,H,Z.$,C.$]}),t})()}}]);