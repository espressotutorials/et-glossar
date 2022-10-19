import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { SharedAllModule } from '../../shared/shareAllModule';
import { SharedFrontModule } from '../../shared/front/shareFrontModule';


@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    SharedAllModule,
    SharedFrontModule
  ]
})
export class OverviewModule { }
