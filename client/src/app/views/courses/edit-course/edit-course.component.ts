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
  selectedImage: File = null;

  editCourseForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditCourseComponent>,
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
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
    let formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("duration", duration);
    this.selectedImage && formData.append("courseImage", this.selectedImage, this.selectedImage.name)
    this.coursesService.updateCourse(this.course._id, formData).subscribe(res => {
      console.log(res);
      this.closeModal();
    })
  }

  cancel(event): void {
    event.preventDefault();
    this.closeModal();
  }

  onImageSelected(event) {
    this.selectedImage = <File>event.target.files[0];
  }

}
