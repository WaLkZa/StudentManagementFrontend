import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Course from '../models/Course';
import CourseRequest from '../models/CourseRequest';

const BASE_URL = 'http://localhost:8080/courses'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCoursesPage(page: number, size: number) {
    return this.http.get<any>(BASE_URL + '?page=' + page + '&size=' + size);
  }

  createCourse(courseRequest: CourseRequest): Observable<Course> {
    return this.http.post<Course>(BASE_URL, courseRequest);
  }
}
