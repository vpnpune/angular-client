// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Issue : FormsModule declared in APP but still requires here 
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerComponent } from './container.component';
import { ContainerRoutes } from './container.routing';
import { ContainerListModule } from '../container-list/container-list.module';

// This Module's Components
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ContainerListModule,
    RouterModule,
  ],
  declarations: [ContainerComponent]
})

export class ContainerModule { }
