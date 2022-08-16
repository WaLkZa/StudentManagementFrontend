import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { AddTeacherComponent } from './components/teacher/add-teacher/add-teacher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    TeacherComponent,
    StudentComponent,
    CourseComponent,
    AddTeacherComponent,
    AddStudentComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
