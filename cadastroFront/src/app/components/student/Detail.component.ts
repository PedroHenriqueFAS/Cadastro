import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { StudentService } from './Student.service'

@Component({
  selector: 'product-detail',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <form ngNativeValidate method="post">
            <div class="row">
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_id">Id</label>
                <input readonly id="student_id" name="id" class="form-control" value="{{student.id}}" type="number" required />
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_name">Name</label>
                <input readonly id="student_name" name="name" class="form-control" value="{{student.name}}" maxlength="50" />
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_age">age</label>
                <input readonly id="student_age" name="age" class="form-control" value="{{student.age}}" type="number" />
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_name">Email</label>
                <input readonly id="student_email" name="email" class="form-control" value="{{student.email}}" maxlength="50" />
              </div>
              <div class="col-12">
                <a class="btn btn-secondary" routerLink="/student">Back</a>
                <a class="btn btn-primary" routerLink="/student/edit/{{student.Id}}">Edit</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>`
})
export class StudentDetail {
  
  student?: any = {}
  constructor(private route: ActivatedRoute, private StudentService: StudentService) { }
  
  ngOnInit() {
    this.get()
  }

  get() {
    return this.StudentService.get(this.route.snapshot.params['id']).subscribe(data => {
      this.student = data
    }, e => {
      alert(e.error)
    })
  }
}