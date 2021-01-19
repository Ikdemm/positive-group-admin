import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";
import { Category } from '../../../models/category.model';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: Category;
  editCategoryForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditCategoryComponent>,
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(): void {
    this.editCategoryForm = this.formBuilder.group({})
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onSubmit(name, description): void {
    this.category.name = name;
    this.category.description = description;
    this.categoriesService.updateCategory(this.category).subscribe(res => {
      console.log(res);
      this.closeModal();
    })
  }

  cancel(event): void {
    event.preventDefault();
    this.closeModal();
  }

}
