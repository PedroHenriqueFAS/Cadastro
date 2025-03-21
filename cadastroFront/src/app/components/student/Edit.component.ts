import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { StudentService } from './Student.service'

@Component({
  selector: 'product-edit',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <form ngNativeValidate method="post" (submit)="edit()">
            <div class="row">
              <!-- <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_id">Id</label>
                <input readonly id="student_id" name="id" class="form-control" [(ngModel)]="student.id" type="number" required />
                <span *ngIf="errors.id" class="text-danger">{{errors.id}}</span>
              </div> -->
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_name">Name</label>
                <input id="student_name" name="name" class="form-control" [(ngModel)]="student.name" maxlength="50" />
                <span *ngIf="errors.name" class="text-danger">{{errors.name}}</span>
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_age">age</label>
                <input id="student_age" name="age" class="form-control" [(ngModel)]="student.age" type="number" />
                <span *ngIf="errors.age" class="text-danger">{{errors.age}}</span>
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="student_email">E-mail</label>
                <input id="student_email" name="email" class="form-control" [(ngModel)]="student.email" maxlength="50" />
                <span *ngIf="errors.email" class="text-danger">{{errors.email}}</span>
              </div>
              <div class="col-12">
                <a class="btn btn-secondary" routerLink="/student">Cancel</a>
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>`
})
export class StudentEdit {
  
  student?: any = {}
  errors?: any = {}
  constructor(private router: Router, private route: ActivatedRoute, private StudentService: StudentService) { }
  
  ngOnInit() {
    this.get()
  }

  get() {
    return this.StudentService.edit(this.route.snapshot.params['id']).subscribe(data => {
      this.student = data
    }, e => {
      alert(e.error)
    })
  }

  edit() {
    this.StudentService.edit(this.route.snapshot.params['id'], this.student).subscribe(() => {
      this.router.navigateByUrl('/student')
    }, (e) => {
      alert(e.error)
    })
  }
}