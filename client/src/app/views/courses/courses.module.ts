import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddCcourseComponent } from './add-ccourse/add-ccourse.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

@NgModule({
  declarations: [AddCcourseComponent, CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
