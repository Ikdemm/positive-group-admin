import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course.model';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Array<Course>

  constructor(private coursesService: CoursesService) { }

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

  openEditCourse(course: Course) {
    
  }

}
