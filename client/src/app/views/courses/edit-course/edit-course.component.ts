import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Course } from '../../../models/course.model';
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../../models/category.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course: Course;
  categories: Array<Category>;

  editCourseForm: FormGroup;

  constructor(
     private dialogRef: MatDialogRef<EditCourseComponent>, 
     private categoriesService: CategoriesService,
     private formBuilder: FormBuilder,
     private coursesService: CoursesService
    ) { }

  ngOnInit(): void {
    console.log(this.course);
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories)
    })
    this.createForm();
  }

  createForm(): void {
    this.editCourseForm = this.formBuilder.group({})
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onSubmit(name, category, description, duration) {
    this.course.name = name;
    this.course.category = category;
    this.course.description = description;
    this.course.duration = duration;
    console.log(this.course)
    this.coursesService.updateCourse(this.course).subscribe(res => {
      console.log(res);
      this.closeModal();
    })
  }

}
