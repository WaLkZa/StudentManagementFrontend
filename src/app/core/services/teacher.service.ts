import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Teacher from '../models/Teacher';
import TeacherRequest from '../models/TeacherRequest';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/teachers'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getTeachers() {
    return this.http.get<Teacher[]>(BASE_URL);
  }

  getTeachersPage(page: number, size: number) {
    return this.http.get<any>(BASE_URL + '?page=' + page + '&size=' + size);
  }

  createTeacher(teacherRequest: TeacherRequest): Observable<Teacher> {
    return this.http.post<Teacher>(BASE_URL, teacherRequest);
  }
}
