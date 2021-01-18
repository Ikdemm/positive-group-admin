import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Course } from '../../../models/course.model';
import {  } from ''
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course: Course;
  categories: Array<Category>

  constructor(private dialogRef: MatDialogRef<EditCourseComponent>, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    console.log(this.course);
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories)
    })
  }

}
