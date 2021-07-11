import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course.model';
import { CoursesService } from '../../../services/courses.service';

import { MatDialog } from "@angular/material/dialog";
import { EditCourseComponent } from '../edit-course/edit-course.component';
import Swal from "sweetalert2";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Array<Course>

  constructor(private coursesService: CoursesService, private dialogRef: MatDialog) { }


  getCourses() {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
    })
  }

  deleteCourse(id) {
    Swal.fire({
      title: 'Vous êtes sûr?',
      text: "Les données supprimées seront perdus",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé!',
          'Suppression terminée avec succès',
          'success'
        )
        this.coursesService.deleteCourse(id).subscribe((res) => {
          this.getCourses()
        })
      }
    })

  }

  openEditCourse(course: Course): void {
    const dialogRef = this.dialogRef.open(EditCourseComponent, { width: "600px" });
    dialogRef.componentInstance.course = course;
    dialogRef.afterClosed().subscribe(res => {
      this.getCourses();
    })
  }

  ngOnInit(): void {
    this.getCourses()
  }
}
