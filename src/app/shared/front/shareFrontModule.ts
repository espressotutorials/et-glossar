import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StageComponent } from './stage/stage.component';
import { GlossarNavigationComponent } from './glossar-navigation/glossar-navigation.component';
import { GlossarComponent } from './glossar/glossar.component';
import { RouterModule } from '@angular/router';
import { SharedPipesModule } from '../pipes/sharePipesmodule';

const components = [
  SearchComponent,
  StageComponent,
  GlossarNavigationComponent,
  GlossarComponent
];

const modules = [
  CommonModule,
  FontAwesomeModule,
  FontAwesomeModule,
  RouterModule,
  SharedPipesModule
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
export class SharedFrontModule {}

