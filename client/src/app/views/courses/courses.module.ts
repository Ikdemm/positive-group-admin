import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './courses-list/course/course.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit-course/edit-course.component';

import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [AddCourseComponent, CoursesListComponent, CourseComponent, EditCourseComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents: [EditCourseComponent]
})
export class CoursesModule { }
