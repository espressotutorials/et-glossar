import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SlugPipe } from './slug.pipe';

const pipes = [
  SlugPipe
];

@NgModule({
    declarations: [
        ...pipes
    ],
    imports: [],
    exports: [
        ...pipes
    ],
    providers: [
        ...pipes,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class SharedPipesModule {}
