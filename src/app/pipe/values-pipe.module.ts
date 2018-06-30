import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuesPipe } from './values-pipe.pipe';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        ValuesPipe,
    ],
    exports: [
        ValuesPipe,
    ]
})
export class ValuesPipeModule {

}
