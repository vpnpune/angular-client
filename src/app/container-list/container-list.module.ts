// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Issue : FormsModule declared in APP but still requires here 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerListComponent } from './container-list.component';
import { ContainerListRoutes } from './container-list.routing';

// This Module's Components
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(ContainerListRoutes)

  ],
  declarations: [ContainerListComponent]
})

export class ContainerListModule { }
