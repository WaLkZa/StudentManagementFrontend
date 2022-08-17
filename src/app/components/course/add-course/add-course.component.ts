import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import CourseRequest from 'src/app/core/models/CourseRequest';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseForm!: FormGroup;

  @Output()
  clickButtonEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private courseService: CourseService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      totalHours: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)])
    })
  }

  onSubmit(): void {
    let courseRequest: CourseRequest = {
      name: this.courseForm.controls["name"].value,
      totalHours: this.courseForm.controls["totalHours"].value
    }

    this.courseService.createCourse(courseRequest)
      .subscribe((res) => {
        this.toastr.success('Created!');
        this.clickButtonEmitter.emit(courseRequest);
      })
  }

  get f() {
    return this.courseForm.controls;
  }

}
