import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import TeacherRequest from 'src/app/core/models/TeacherRequest';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  teacherForm!: FormGroup;

  @Output()
  clickButtonEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private teacherService: TeacherService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      degree: new FormControl('', [Validators.required])
    })
  }

  onSubmit(): void {
    let teacherRequest: TeacherRequest = {
      name: this.teacherForm.controls["name"].value,
      degree: this.teacherForm.controls["degree"].value
    }

    this.teacherService.createTeacher(teacherRequest)
      .subscribe((res) => {
        this.toastr.success('Created!');
        this.clickButtonEmitter.emit(teacherRequest);
      })
  }

  get f() {
    return this.teacherForm.controls;
  }
}
