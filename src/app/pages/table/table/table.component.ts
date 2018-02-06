import {Component, OnDestroy, OnInit} from '@angular/core'
import {UsersService} from "../../../services/users/users.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit/*, OnDestroy*/ {
  sub
  dirty = false
  inputVal = "blabla"

  users : any = []

  rowClick(index) {
    this.users.splice(index, 1)
  }

  constructor(private userServices : UsersService) { }

  async ngOnInit() {
    this.users = await this.userServices.getUsers().toPromise()
    this.dirty = true
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe()
  // }

}
