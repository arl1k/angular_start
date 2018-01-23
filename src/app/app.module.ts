import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component'
import { routes } from './app.routes'
import { LayoutsModule } from './common/layouts/layouts.module'
import { DashboardModule } from './pages/dashboard/dashboard.module'
import { TableModule } from './pages/table/table.module'
import { NotFoundModule } from './pages/not-found/not-found.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    LayoutsModule,
    DashboardModule,
    TableModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
