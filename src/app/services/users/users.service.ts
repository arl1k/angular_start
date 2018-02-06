import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";

@Injectable()
export class UsersService {

  constructor() { }

  getUsers() {
    return new Observable(obser => {
      setTimeout(() => {

        console.log('getUsers done')
        const users = [
          {first : "vik1", last : "vik1", email: "vik1@vik.vik", color:"red"},
          {first : "vik2", last : "vik2", email: "vik2@vik.vik", width:400}
        ]
        obser.next(users)
        obser.complete() // MUST! close observer
      }, 2000)
    })
  }
}
