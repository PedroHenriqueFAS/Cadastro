import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http: HttpClient) { }

  get(id?: any): Observable<any> {
    if (id) {
      return this.http.get(`/students/${id}`)
    }
    else {
      return this.http.get('/students' )
    }
  }

  create(data?: any): Observable<any> {
    if (data) {
      console.log(data)
      return this.http.post('/students', data)
    }
    else {
      return this.http.get('/students')
    }
  }

  edit(id: any, data?: any): Observable<any> {
    if (data) {
      return this.http.put(`/students/${id}`, data)
    }
    else {
      return this.http.get(`/students/${id}`)
    }
  }

  delete(id: any, data?: any): Observable<any> {
    if (data) {
      return this.http.delete(`/students/${id}`)
    }
    else {
      return this.http.get(`/students/${id}`)
    }
  }
}