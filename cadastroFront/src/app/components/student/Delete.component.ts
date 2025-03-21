import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { StudentService } from './Student.service'

@Component({
  selector: 'product-delete',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <form ngNativeValidate method="post" (submit)="this.delete()">
            <div class="row">
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_id">Id</label>
                <input readonly id="student_id" name="id" class="form-control" value="{{student.Id}}" type="number" required />
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_name">Name</label>
                <input readonly id="student_name" name="name" class="form-control" value="{{student.Name}}" maxlength="50" />
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_age">age</label>
                <input readonly id="student_age" name="age" class="form-control" value="{{student.age}}" type="number" />
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_email">Name</label>
                <input readonly id="student_email" name="email" class="form-control" value="{{student.Email}}" maxlength="50" />
              </div>
              <div class="col-12">
                <a class="btn btn-secondary" routerLink="/student">Cancel</a>
                <button class="btn btn-danger">Delete</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>`
})
export class StudentDelete {
  
  student?: any = {}
  constructor(private router: Router, private route: ActivatedRoute, private StudentService: StudentService) { }
  
  ngOnInit() {
    this.get()
  }

  get() {
    return this.StudentService.delete(this.route.snapshot.params['id']).subscribe(data => {
      this.student = data
    }, e => {
      alert(e.error)
    })
  }

  delete() {
    this.StudentService.delete(this.route.snapshot.params['id'], this.student).subscribe(() => {
      this.router.navigateByUrl('/student')
    }, (e) => {
      alert(e.error)
    })
  }
}