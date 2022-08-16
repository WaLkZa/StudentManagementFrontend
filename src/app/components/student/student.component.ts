import { Component, OnInit } from '@angular/core';
import Student from 'src/app/core/models/Student';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Array<Student> = [];

  totalElements: number = 0;
  currentPageIdFe: number = 0;
  currentPageIdBe: number = 0;
  pageSize: number = 5;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadData()
  }

  fromAddStudentChild() {
    setTimeout(() => {
      this.ngOnInit();
    }, 200);
  }

  loadData() {
    this.studentService.getStudentsPage(this.currentPageIdBe, this.pageSize)
      .subscribe(response => {
        this.students = response['content']
        this.totalElements = (response['totalPages'] + 1) * this.pageSize
      })
  }

  pageChangeEvent(event: number) {
    this.currentPageIdFe = event;
    this.currentPageIdBe = this.currentPageIdFe - 1;
    
    this.loadData();
  }
}