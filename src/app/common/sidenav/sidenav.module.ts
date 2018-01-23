import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material'
import { RouterModule } from '@angular/router'

import { SidenavComponent } from './sidenav/sidenav.component'

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    SidenavComponent
  ],
  exports : [
    SidenavComponent
  ]
})
export class SidenavModule { }
