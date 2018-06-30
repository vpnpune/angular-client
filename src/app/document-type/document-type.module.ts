// Angular Imports
import { ListModule } from './../list/list.module';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from './../demo-material-module';
import { CommonModule } from '@angular/common';

// This Module's Components
import { DocumentTypeComponent } from './document-type.component';
import { DocumentTypeRoutingModule } from './document-type-routing.module';

@NgModule({
    imports: [
        CommonModule,
        DemoMaterialModule,
        FlexLayoutModule,
        FormsModule,
        RouterModule,
        DocumentTypeRoutingModule,
        ListModule

    ],
    declarations: [
        DocumentTypeComponent,
    ],
    exports: [
        DocumentTypeComponent,
    ]
})
export class DocumentTypeModule {

}
