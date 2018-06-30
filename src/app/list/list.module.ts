import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from './../demo-material-module';
import { CommonModule } from '@angular/common';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ListComponent } from './list.component';
import { ValuesPipeModule } from '../pipe/values-pipe.module';

@NgModule({
    imports: [
      CommonModule,
      DemoMaterialModule,
      FlexLayoutModule,
      FormsModule,
      RouterModule,
      ValuesPipeModule
    ],
    declarations: [
        ListComponent,
    ],
    exports: [
        ListComponent,
    ]
})
export class ListModule {

}
