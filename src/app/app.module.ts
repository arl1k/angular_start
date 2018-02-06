import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component'
import { routes } from './app.routes'
import { LayoutsModule } from './common/layouts/layouts.module'
import { DashboardModule } from './pages/dashboard/dashboard.module'
import { TableModule } from './pages/table/table.module'
import { NotFoundModule } from './pages/not-found/not-found.module'
import {UsersService} from "./services/users/users.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    LayoutsModule,
    DashboardModule,
    TableModule,
    NotFoundModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
