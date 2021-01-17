import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Course } from '../../../models/course.model';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
    duration: new FormControl(0)
  })

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.coursesService.createCourse(this.courseForm.value).subscribe((course: Course) => {
      console.log(course)
    })
  }

}
