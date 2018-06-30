import { ListModule } from './../list/list.module';
import { StorageConditionRoutingModule } from './storage-condition-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from './../demo-material-module';
import { CommonModule } from '@angular/common';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { StorageConditionComponent } from './storage-condition.component';

@NgModule({
    imports: [
      CommonModule,
      DemoMaterialModule,
      FlexLayoutModule,
      FormsModule,
      RouterModule,
      StorageConditionRoutingModule,
      ListModule
    ],
    declarations: [
        StorageConditionComponent,
    ],
    exports: [
        StorageConditionComponent,
    ]
})
export class StorageConditionModule {

}
