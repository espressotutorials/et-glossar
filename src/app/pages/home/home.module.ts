import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedAllModule } from '../../shared/shareAllModule';
import { SharedFrontModule } from '../../shared/front/shareFrontModule';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedAllModule,
    SharedFrontModule
  ]
})
export class HomeModule { }
