import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedPipesModule } from './pipes/sharePipesmodule';
import { MatMenuModule } from '@angular/material/menu';
import { LogoComponent } from './global/logo/logo.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { LanguageSwitcherComponent } from './global/language-switcher/language-switcher.component';

const components = [
  LogoComponent,
  HeaderComponent,
  FooterComponent,
  LanguageSwitcherComponent
];

const modules = [
  CommonModule,
  SharedPipesModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MatMenuModule
];

const directives = [];

@NgModule({
    declarations: [
      ...components
    ],
    imports: [
      ...modules,
    ],
    exports: [
      ...components,
      ...modules,
      //...pipes
    ],
    providers: [],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ]
})
export class SharedAllModule {}

