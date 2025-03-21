import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppInterceptor } from './app.interceptor'

import { StudentIndex } from './components/student/Index.component'
import { StudentCreate } from './components/student/Create.component'
import { StudentDetail } from './components/student/Detail.component'
import { StudentEdit } from './components/student/Edit.component'
import { StudentDelete } from './components/student/Delete.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentIndex,
    StudentCreate,
    StudentDetail,
    StudentEdit,
    StudentDelete,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }