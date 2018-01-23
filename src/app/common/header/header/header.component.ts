import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Output() navToggle = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  clickMenu() {
    this.navToggle.emit(true)
  }
}
