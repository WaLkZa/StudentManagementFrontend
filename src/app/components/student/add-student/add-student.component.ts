import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import StudentRequest from 'src/app/core/models/StudentRequest';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm!: FormGroup;

  constructor(private studentService: StudentService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    })
  }

  onSubmit(): void {
    let studentRequest: StudentRequest = {
      name: this.studentForm.controls["name"].value,
      age: this.studentForm.controls["age"].value
    }

    this.studentService.createStudent(studentRequest)
      .subscribe({
        next: (res) => this.toastr.success('Created!'),
        error: (err) => this.toastr.error(err.message)
      })
  }
}
