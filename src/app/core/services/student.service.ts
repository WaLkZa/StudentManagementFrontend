import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Student from '../models/Student';
import StudentRequest from '../models/StudentRequest';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/students'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get<Student[]>(BASE_URL);
  }

  getStudentsPage(page: number, size: number) {
    return this.http.get<any>(BASE_URL + '?page=' + page + '&size=' + size);
  }

  createStudent(studentRequest: StudentRequest): Observable<Student> {
    return this.http.post<Student>(BASE_URL, studentRequest);
  }

  deleteStudent(id: number) {
    return this.http.delete(BASE_URL + '/' + id)
  }
}
