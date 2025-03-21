import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StudentIndex } from './components/student/Index.component'
import { StudentCreate } from './components/student/Create.component'
import { StudentDetail } from './components/student/Detail.component'
import { StudentEdit } from './components/student/Edit.component'
import { StudentDelete } from './components/student/Delete.component'

const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student', component: StudentIndex },
  { path: 'student/create', component: StudentCreate },
  { path: 'student/:id', component: StudentDetail },
  { path: 'student/edit/:id', component: StudentEdit },
  { path: 'student/delete/:id', component: StudentDelete }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }