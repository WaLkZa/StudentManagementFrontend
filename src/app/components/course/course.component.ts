import { Component, OnInit } from '@angular/core';
import Course from 'src/app/core/models/Course';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Array<Course> = [];

  totalElements: number = 0;
  currentPageIdFe: number = 0;
  currentPageIdBe: number = 0;
  pageSize: number = 5;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadData()
  }

  fromAddCourseChild() {
    setTimeout(() => {
      this.ngOnInit();
    }, 200);
  }

  loadData() {
    this.courseService.getCoursesPage(this.currentPageIdBe, this.pageSize)
      .subscribe(response => {
        this.courses = response['content']
        this.totalElements = (response['totalPages'] + 1) * this.pageSize
      })
  }

  pageChangeEvent(event: number) {
    this.currentPageIdFe = event;
    this.currentPageIdBe = this.currentPageIdFe - 1;
    
    this.loadData();
  }
}