import { ListModule } from './../list/list.module';
import { ClientRoutingModule } from './client-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from './../demo-material-module';
import { CommonModule } from '@angular/common';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ClientComponent } from './client.component';

@NgModule({
    imports: [
      CommonModule,
      DemoMaterialModule,
      FlexLayoutModule,
      FormsModule,
      RouterModule,
      ClientRoutingModule,
      ListModule
    ],
    declarations: [
        ClientComponent,
    ],
    exports: [
        ClientComponent,
    ]
})
export class ClientModule {

}
