import { ListComponent } from './list/list.component';
import { ContainerComponent } from './container/container.component';
import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{
    path: '',
    redirectTo: '/starter',
    pathMatch: 'full'
  }, {
    path: '',
    loadChildren: './material-component/material.module#MaterialComponentsModule'
  }, {
    path: 'starter',
    loadChildren: './starter/starter.module#StarterModule'
  }, {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }, {
    path: 'container',
    loadChildren: './container/container.module#ContainerModule'
  },
  {
    path: 'storage-condition',
    loadChildren: './storage-condition/storage-condition.module#StorageConditionModule'
  },
  {
    path: 'document-type',
    loadChildren: './document-type/document-type.module#DocumentTypeModule'
  }
  ]
}];

