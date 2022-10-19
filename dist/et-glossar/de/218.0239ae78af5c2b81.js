"use strict";(self.webpackChunket_glossar=self.webpackChunket_glossar||[]).push([[218],{9218:(U,E,i)=>{i.r(E),i.d(E,{DetailModule:()=>$});var T=i(6895),l=i(646),r=i(9316),_=i(1571),R=i(9292),I=i(9885),f=i(1578),P=i(9301),L=i(3868),p=i(896);function F(t,n){if(1&t&&(_.ynx(0),_.TgZ(1,"h2",44)(2,"span"),_.SDv(3,45),_.qZA(),_._uU(4),_.qZA(),_.BQk()),2&t){const e=_.oxw(2);_.xp6(4),_.hij(" ",e.item.example,"")}}function D(t,n){if(1&t&&(_.ynx(0),_.TgZ(1,"p",46)(2,"span",47),_.SDv(3,48),_.qZA(),_.TgZ(4,"a",49),_._uU(5),_.qZA()(),_.BQk()),2&t){const e=_.oxw(2);_.xp6(4),_.Q6J("href",e.item.source,_.LSH),_.xp6(1),_.Oqu(e.item.source)}}function m(t,n){if(1&t&&(_.ynx(0),_.TgZ(1,"article")(2,"h1",10),_._uU(3),_.qZA(),_.YNc(4,F,5,1,"ng-container",11),_._UZ(5,"div",12),_.YNc(6,D,6,2,"ng-container",11),_.TgZ(7,"div",13)(8,"h2",14),_._uU(9,"Espresso Tutorials"),_.qZA(),_.TgZ(10,"p",15),_.SDv(11,16),_.qZA(),_.TgZ(12,"p",17),_.SDv(13,18),_.qZA(),_.TgZ(14,"div",19)(15,"a",20)(16,"div",21),_.O4$(),_.TgZ(17,"svg",22)(18,"defs")(19,"style"),_._uU(20,".cls-1{fill:#33a8e0;}.cls-2{fill:#f39100;}"),_.qZA()(),_._UZ(21,"path",23)(22,"path",24)(23,"path",25)(24,"path",26),_.qZA()(),_.kcU(),_.TgZ(25,"h3",27),_._uU(26,"et.training"),_.qZA(),_.TgZ(27,"p",28),_.SDv(28,29),_.qZA()(),_.TgZ(29,"a",30)(30,"div",21),_.O4$(),_.TgZ(31,"svg",31)(32,"g",32)(33,"g",33)(34,"g",34)(35,"g",35)(36,"g",36),_._UZ(37,"path",37),_.qZA(),_.TgZ(38,"g",38),_._UZ(39,"path",39)(40,"path",40),_.qZA(),_._UZ(41,"path",41),_.qZA()()()()()(),_.kcU(),_.TgZ(42,"h3",27),_._uU(43,"infoday.io"),_.qZA(),_.TgZ(44,"p",28),_.SDv(45,42),_.qZA()()()(),_.TgZ(46,"div",43),_._UZ(47,"app-newsletter"),_.qZA()(),_.BQk()),2&t){const e=_.oxw();_.xp6(3),_.Oqu(e.item.title),_.xp6(1),_.Q6J("ngIf",e.item.example),_.xp6(1),_.Q6J("innerHTML",e.item.description,_.oJD),_.xp6(1),_.Q6J("ngIf",e.item.source)}}function N(t,n){1&t&&(_.TgZ(0,"span",50),_.SDv(1,51),_.qZA())}function h(t,n){if(1&t&&(_.ynx(0),_.TgZ(1,"li",60)(2,"a",61),_.ALo(3,"slug"),_._uU(4),_.TgZ(5,"i"),_._UZ(6,"fa-icon",57),_.qZA()()(),_.BQk()),2&t){const e=n.$implicit,o=_.oxw(2);_.xp6(2),_.cQ8("routerLink","/glossar/",_.lcZ(3,5,e.title),"/",e.id,"/",o.character,""),_.xp6(2),_.hij(" ",e.title," "),_.xp6(2),_.Q6J("icon",o.faLink)}}function x(t,n){if(1&t&&(_.ynx(0),_.TgZ(1,"ul"),_.YNc(2,h,7,7,"ng-container",52),_.TgZ(3,"li",53)(4,"a",54),_.tHW(5,55),_.TgZ(6,"i",56),_._UZ(7,"fa-icon",57),_.qZA(),_.N_p(),_.qZA()(),_.TgZ(8,"li",53)(9,"a",58),_.tHW(10,59),_.TgZ(11,"i",56),_._UZ(12,"fa-icon",57),_.qZA(),_.N_p(),_.qZA()()(),_.BQk()),2&t){const e=_.oxw();_.xp6(2),_.Q6J("ngForOf",e.items),_.xp6(2),_.MGl("routerLink","/glossar/",e.character,""),_.xp6(3),_.Q6J("icon",e.faArrow),_.xp6(5),_.Q6J("icon",e.faArrow)}}function C(t,n){1&t&&(_.TgZ(0,"span",50),_.SDv(1,62),_.qZA())}const G=[{path:"",component:(()=>{class t{constructor(e,o){this.route=e,this.api=o,this.faLink=r._tD,this.faArrow=r.eFW,this.items=[],this.loading=!1,this.loadingItems=!1,this.subscriptions=[]}ngOnInit(){this.initData()}ngOnDestroy(){this.subscriptions&&this.subscriptions.length>0&&this.subscriptions.forEach(e=>{e.unsubscribe()})}initData(){this.loading=!0,this.loadingItems=!0,this.subscriptions.push(this.route.params.subscribe(e=>{this.character=e.character,this.id=e.id,this.getData(this.id,this.character)}))}getData(e,o){const s=document.documentElement.lang;this.loading=!0,this.subscriptions.push(this.api.getData(`api/glossaries/${e}?locale=${s}`).subscribe(a=>{this.item=a.data,this.loading=!1},a=>{this.loading=!1})),this.subscriptions.push(this.api.getData(`api/glossaries?char=${o}&locale=${s}`).subscribe(a=>{this.items=a.data,this.loadingItems=!1},a=>{this.loadingItems=!1}))}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(l.gz),_.Y36(R.s))},t.\u0275cmp=_.Xpm({type:t,selectors:[["app-detail"]],decls:15,vars:4,consts:function(){let n,e,o,s,a,A,g,c,d,u,O;return n="Weitere Begriffe",e="Espresso Tutorials bietet Ihnen auf das Wesentliche fokussierte Lernmedien f\xFCr Ihren Weg vom Schnelleinstieg zum SAP-Profi.",o="Mit unserer SAP-Lernplattform et.training bieten wir Ihnen eine Flatrate f\xFCr E-Books und Videos. Unser Motto: \u201ELearn SAP anytime, anywhere, and on any device\u201C.",s="Ihre Lernplattform f\xFCr SAP-Software",a="Besuchen Sie unsere virtuellen SAP-Infotage",A="Beispiel:",g="Quelle:",c="Inhalt wird geladen\u2026",d=" Alle anzeigen " + "\ufffd#6\ufffd" + "" + "\ufffd#7\ufffd" + "" + "\ufffd/#7\ufffd" + "" + "\ufffd/#6\ufffd" + "",u=" Zur\xFCck zur \xDCbersicht " + "\ufffd#11\ufffd" + "" + "\ufffd#12\ufffd" + "" + "\ufffd/#12\ufffd" + "" + "\ufffd/#11\ufffd" + "",O="Weitere Inhalte werden geladen\u2026",[[1,"w-full","py-16","md:py-32","px-4","md:px-8"],[1,"max-w-stage","w-full","mx-auto","flex","flex-row","flex-wrap"],["id","content",1,"w-full","md:w-2/3","order-1","md:order-2","pl-0","md:pl-16"],[4,"ngIf","ngIfElse"],["loadingContent",""],["id","sidebar",1,"w-full","md:w-1/3","order-2","md:order-1"],["id","sidebar-navigation"],[1,"text-gray-800","text-lg","font-semibold","mb-6"],n,["loadingNav",""],[1,"text-4xl","font-bold","text-gray-800","leading-tight"],[4,"ngIf"],[1,"prose","mt-6",3,"innerHTML"],[1,"mt-16","border-t","border-gray-400","border-solid","pt-8"],[1,"text-2xl","font-semibold","text-gray-800","mb-4"],[1,"text-gray-700","mb-2"],e,[1,"text-gray-700"],o,[1,"grid","grid-cols-2","gap-4","mt-8"],["href","https://et.training","target","_blank","rel","noopener nofollow",1,"shadow","p-8","rounded-xl","hover:shadow-xl","transition-shadow","duration-200","ease-in-out"],[1,"w-16","h-16","mx-auto","mb-4"],["id","Ebene_1","data-name","Ebene 1","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 738.43 621.05"],["d","M132.58,264.79Q166.75,257,196.23,253a409.31,409.31,0,0,1,53.5-4c39.4,0,70.46,8.24,92.52,26.1a61.34,61.34,0,0,1,7.62,7.67V135.16q0-69.75-36.54-98.62Q267.7,0,178.8,0a626.91,626.91,0,0,0-81,5.86Q52.93,11.29,0,23.11V542.39A765.6,765.6,0,0,1,88.18,527.1c12.39-1.38,24.73-2.38,37-3.19V266.65Z",1,"cls-1"],["d","M605.94,264.79Q571.5,257,542.3,253a409.34,409.34,0,0,0-53.51-4c-39.39,0-70.46,8.24-92.51,26.1a61.42,61.42,0,0,0-7.63,7.67V135.16q0-69.75,36.54-98.62Q470.88,0,559.73,0a626.91,626.91,0,0,1,81,5.86,987.55,987.55,0,0,1,97.71,17.25V542.39a765.23,765.23,0,0,0-88.18-15.29c-12.39-1.38-24.73-2.38-37-3.19V266.65Z",1,"cls-2"],["d","M330.15,309c-17-14.29-43.26-22-79.75-22a377.69,377.69,0,0,0-50.4,3.81c-11.34,1.52-23.35,3.62-36,6.1V600.27c9.29-1.66,18.53-3,27.82-4.14a492.13,492.13,0,0,1,56.79-3.34c28.58,0,51.21,2.91,68.75,9.2a111.62,111.62,0,0,1,32.53,19.06V366.41C349.83,337.25,342.73,319.19,330.15,309Z",1,"cls-1"],["d","M574.41,297.14c-12.58-2.48-24.64-4.77-35.93-6.1a379.36,379.36,0,0,0-50.4-3.81c-36.49,0-62.79,7.86-79.75,22-12.48,10.19-19.68,28.25-19.68,57.17V620.85a111.86,111.86,0,0,1,32.54-19.05c17.53-6.29,40.26-9.15,68.75-9.2a492.13,492.13,0,0,1,56.79,3.34c9.24,1.09,18.48,2.43,27.72,4.1Z",1,"cls-2"],[1,"text-center","text-base","md:text-lg","text-gray-800"],[1,"text-sm","md:text-base","text-gray-700","mt-2","text-center"],s,["href","https://infoday.io","target","_blank","rel","noopener nofollow",1,"shadow","p-8","rounded-xl","hover:shadow-xl","transition-shadow","duration-200","ease-in-out"],["id","Layer_1","data-name","Layer 1","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 104.07 117.37"],["id","id-logo"],["id","Gruppe_694","data-name","Gruppe 694"],["id","Gruppe_693","data-name","Gruppe 693"],["id","Gruppe_691","data-name","Gruppe 691"],["id","Gruppe_30","data-name","Gruppe 30"],["id","Pfad_17","data-name","Pfad 17","d","M51.49,0c28.44,0,52.58,22.4,52.58,50.83,0,14.62-6.16,54.08-52.58,66.54.11.36,0-13.47,0-13.63C23.05,103.74,0,79.93,0,51.49A51.49,51.49,0,0,1,51.49,0Z",2,"fill","#33a8e0"],["id","Gruppe_692","data-name","Gruppe 692"],["id","Pfad_824","data-name","Pfad 824","d","M38.06,70.09c1.2,0,2.77.31,2.77-1.36a109.17,109.17,0,0,1-2-21.72c0-5.69.63-7.62.63-9.56,0-.62-.05-.78-2.25-.78H34.3c-1.72,0-2.56-1.72-2.56,16.14,0,18.38.21,17.28,2.77,17.28ZM36.34,32.6c2.09,0,4-1.2,4-3.45a3.74,3.74,0,0,0-3.87-3.61h-.15a3.74,3.74,0,0,0-4,3.46.61.61,0,0,0,0,.14C32.32,31.4,34.25,32.6,36.34,32.6Z",2,"fill","#fff"],["id","Pfad_825","data-name","Pfad 825","d","M59.34,62.26c-4.44,0-5.8-5.59-5.8-9.19,0-9.5,5.12-12.43,7.37-12.43,1.93,0,3.34.63,3.34,9.82C64.25,54.22,65,62.26,59.34,62.26Zm10.34,7.63c1.83,0,1.62-17.5,1.62-18.7,0-2.45.21-25.85-2.14-25.85H63.73c-.52,0-1.83,0-1.83.74,0,2,1.31,3.86,1.31,8.09,0,.83-.16,2.71-1.21,2.71-.73,0-1.88-1.2-3-1.2-4.6,0-12.54,6.53-12.54,18.49,0,10.55,5.12,15.72,11,15.72Z",2,"fill","#fff"],["id","Pfad_826","data-name","Pfad 826","d","M35.47,82.33H69.24",2,"fill","none","stroke","#fff","stroke-linecap","round","stroke-width","6px"],a,[1,"mt-16"],[1,"text-lg","text-gray-600","font-semibold","leading-tight","mt-1"],A,[1,"text-sm","text-gray-700","leading-tight","mt-8"],[1,"mr-1"],g,[1,"text-blue-500","hover:text-orange-500","duration-200","ease-in-out","transition-colors",3,"href"],[1,"text-gray-650","text-lg","font-medium"],c,[4,"ngFor","ngForOf"],[1,"mt-4","border-t","border-gray-600","borser-solid","pt-4"],[1,"flex","flex-row","items-center","pr-8","text-blue-500","text-base","font-semibold","hover:text-orange-500","hover:underline","duration-200","ease-in-out","transition-all",3,"routerLink"],d,[1,"ml-2"],[3,"icon"],["routerLink","/",1,"flex","flex-row","items-center","pr-8","text-blue-500","text-base","font-semibold","hover:text-orange-500","hover:underline","duration-200","ease-in-out","transition-all"],u,[1,"mb-3"],[1,"flex","flex-row","justify-between","items-center","pr-8","text-gray-650","text-base","font-medium","hover:text-blue-500","hover:underline","duration-200","ease-in-out","transition-all",3,"routerLink"],O]},template:function(e,o){if(1&e&&(_._UZ(0,"app-header"),_.TgZ(1,"div",0)(2,"section",1)(3,"main",2),_.YNc(4,m,48,4,"ng-container",3),_.YNc(5,N,2,0,"ng-template",null,4,_.W1O),_.qZA(),_.TgZ(7,"aside",5)(8,"nav",6)(9,"h3",7),_.SDv(10,8),_.qZA(),_.YNc(11,x,13,4,"ng-container",3),_.YNc(12,C,2,0,"ng-template",null,9,_.W1O),_.qZA()()()(),_._UZ(14,"app-footer")),2&e){const s=_.MAs(6),a=_.MAs(13);_.xp6(4),_.Q6J("ngIf",!o.loading&&o.item)("ngIfElse",s),_.xp6(7),_.Q6J("ngIf",!o.loadingItems&&o.items)("ngIfElse",a)}},dependencies:[T.sg,T.O5,l.yS,I.G,f.c,P.O,L.BN,p.u]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[l.Bz.forChild(G),l.Bz]}),t})();var Z=i(7300);let $=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[T.ez,M,Z.$]}),t})()}}]);