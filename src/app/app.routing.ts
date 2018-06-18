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
  },{
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'container',
    loadChildren: './container/container.module#ContainerModule'
  }
]
}];

