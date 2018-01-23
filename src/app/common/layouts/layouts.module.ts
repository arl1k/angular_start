import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BlankComponent } from './blank/blank.component'
import { BasicComponent } from './basic/basic.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlankComponent,
    BasicComponent
  ]
})
export class LayoutsModule { }
