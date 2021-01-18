import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course.model';
import { CoursesService } from '../../../services/courses.service';

import { MatDialog } from "@angular/material/dialog";
import { EditCourseComponent } from '../edit-course/edit-course.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Array<Course>

  constructor(private coursesService: CoursesService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses() {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
    })
  }

  deleteCourse(id) {
    console.log("Deleting ...")
    this.coursesService.deleteCourse(id).subscribe((res) => {
      console.log(res)
      this.getCourses()
    })
  }

  openEditCourse(course: Course): void {
    const dialogRef = this.dialogRef.open(EditCourseComponent, { width: "600px" });
    dialogRef.componentInstance.course = course;
    dialogRef.afterClosed().subscribe(res => {
      this.getCourses();
    })
  } 

}
