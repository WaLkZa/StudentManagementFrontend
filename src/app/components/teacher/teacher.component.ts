import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Teacher from 'src/app/core/models/Teacher';
import { TeacherService } from 'src/app/core/services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: Array<Teacher> = [];

  totalElements: number = 0;
  currentPageIdFe: number = 0;
  currentPageIdBe: number = 0;
  pageSize: number = 5;

  constructor(private teacherService: TeacherService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadData()
  }

  fromAddTeacherChild() {
    setTimeout(() => {
      this.ngOnInit();
    }, 200);
  }

  loadData() {
    this.teacherService.getTeachersPage(this.currentPageIdBe, this.pageSize)
      .subscribe(response => {
        this.teachers = response['content']
        this.totalElements = response['totalElements']
      })
  }

  pageChangeEvent(event: number) {
    this.currentPageIdFe = event;
    this.currentPageIdBe = this.currentPageIdFe - 1;

    this.loadData();
  }

  deleteTeacher(id: number) {
    this.teacherService.deleteTeacher(id)
      .subscribe({
        next: (res) => {
          this.toastr.success('Deleted!');
          this.loadData()
        },
        error: (err) => this.toastr.error(err.message)
      })
  }
}