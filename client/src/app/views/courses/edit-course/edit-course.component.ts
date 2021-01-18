import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Course } from '../../../models/course.model';
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../../models/category.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course: Course;
  categories: Array<Category>;

  editCourseForm: FormGroup;

  // courseForm = new FormGroup({
  //   name: new FormControl(this.course.name),
  //   category: new FormControl(''),
  //   description: new FormControl(''),
  //   duration: new FormControl(0)
  // })

  constructor(private dialogRef: MatDialogRef<EditCourseComponent>, private categoriesService: CategoriesService, private formBuilder: FormBuilder) { }

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

}
