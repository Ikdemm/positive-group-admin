import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Course } from '../../../models/course.model';
import { CoursesService } from '../../../services/courses.service';
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  categories: Array<Category>

  courseForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
    duration: new FormControl(0)
  })

  constructor(private coursesService: CoursesService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories: Array<Category>) => {
      this.categories = categories;
    })
  }

  onSubmit() {
    this.coursesService.createCourse(this.courseForm.value).subscribe((course: Course) => {
      console.log(course)
    })
  }

}
