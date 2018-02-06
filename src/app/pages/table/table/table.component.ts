import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  dirty = false
  inputVal = "blabla"

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.dirty = true
    }, 1000 * 5)
  }
}
