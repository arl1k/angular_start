import { Routes } from '@angular/router'

import { BasicComponent } from './common/layouts/basic/basic.component'
import { BlankComponent } from './common/layouts/blank/blank.component'
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component'
import { TableComponent } from './pages/table/table/table.component'
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component'


export const routes: Routes = [
  {
    path : '',
    redirectTo: 'dashboard',
    pathMatch : 'full'
  },

  {
    path : '',
    component: BasicComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      }
    ]
  },

  {
    path : '',
    component: BlankComponent,
    children: [
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
]
