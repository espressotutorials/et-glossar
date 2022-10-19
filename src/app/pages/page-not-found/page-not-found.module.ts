import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedAllModule } from '../../shared/shareAllModule';
import { SharedFrontModule } from '../../shared/front/shareFrontModule';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    SharedAllModule,
    SharedFrontModule
  ]
})
export class PageNotFoundModule { }
