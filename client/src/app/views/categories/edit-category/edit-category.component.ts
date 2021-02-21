import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Category } from "../../../models/category.model";
import { CategoriesService } from "../../../services/categories.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-edit-category",
  templateUrl: "./edit-category.component.html",
  styleUrls: ["./edit-category.component.css"],
})
export class EditCategoryComponent implements OnInit {
  category: any;
  editCategoryForm: FormGroup;
  selectedImage: File = null;

  constructor(
    private dialogRef: MatDialogRef<EditCategoryComponent>,
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.category)
  }

  createForm(): void {
    this.editCategoryForm = this.formBuilder.group({});
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onSubmit(name, description): void {
    let formData = new FormData()
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", this.category.image);
    this.selectedImage && formData.append("categoryImage", this.selectedImage, this.selectedImage.name);
    this.categoriesService.updateCategory(this.category._id, formData).subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "Done",
        text: `Category updated`,
      });
      this.closeModal();
    });
  }

  cancel(event): void {
    event.preventDefault();
    this.closeModal();
  }

  onImageSelected(event) {
    this.selectedImage = <File>event.target.files[0];
  }
}
