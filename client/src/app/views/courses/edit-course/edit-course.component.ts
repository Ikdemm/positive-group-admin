import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course: Course;

  constructor(private dialogRef: MatDialogRef<EditCourseComponent>) { }

  ngOnInit(): void {
    console.log(this.course)
  }

}
