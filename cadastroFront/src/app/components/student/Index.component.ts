import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { StudentService } from './Student.service'

@Component({
  selector: 'product-index',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let student of students">
                <td>{{student.id}}</td>
                <td>{{student.name}}</td>
                <td class="text-center">{{student.age}}</td>
                <td>{{student.email}}</td> 
                <td class="text-center">
                  <a class="btn btn-secondary" routerLink="/student/{{student.id}}" title="View"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-primary" routerLink="/student/edit/{{student.id}}" title="Edit"><i class="fa fa-pencil"></i></a>
                  <a class="btn btn-danger" routerLink="/student/delete/{{student.id}}" title="Delete"><i class="fa fa-times"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
          <a class="btn btn-primary" routerLink="/student/create">Create</a>
        </div>
      </div>
    </div>`
})

export class StudentIndex {

  students?: any[]
  constructor(public router: Router, private StudentService: StudentService) { }

  ngOnInit() {
    this.get()
  }
  
  get() {
    this.StudentService.get().subscribe(data => {
      this.students = data
    }, e => {
      alert(e.error)
    })
  }
}