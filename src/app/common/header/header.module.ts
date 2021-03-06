import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material'

import { HeaderComponent } from './header/header.component'

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports : [
    HeaderComponent
  ]
})
export class HeaderModule { }
