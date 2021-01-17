import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './courses-list/course/course.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddCourseComponent, CoursesListComponent, CourseComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
