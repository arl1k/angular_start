import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatSidenavModule } from '@angular/material'


import { BlankComponent } from './blank/blank.component'
import { BasicComponent } from './basic/basic.component'
import { HeaderModule } from '../header/header.module'
import { SidenavModule } from '../sidenav/sidenav.module'


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,

    HeaderModule,
    SidenavModule

  ],
  declarations: [
    BlankComponent,
    BasicComponent
  ]
})
export class LayoutsModule { }
