import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CategoriesService } from "../../../services/categories.service";
import { HttpEventType } from '@angular/common/http'

import Swal from "sweetalert2";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.css"],
})
export class AddCategoryComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
  });

  selectedImage: File = null;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  onSubmit() {
    let formData = new FormData();
    formData.append("name", this.categoryForm.value.name);
    formData.append("description", this.categoryForm.value.description);
    formData.append("categoryImage", this.selectedImage, this.selectedImage.name);
    this.categoriesService.createCategory(formData)
      .subscribe((res) => {
        if (res) {
          Swal.fire({
            icon: "success",
            title: "Done",
            text: `Category added`,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops",
            text: `Something went wrong `,
          });
        }
      })
  }

  onImageSelected(event) {
    this.selectedImage = <File>event.target.files[0];
  }

  ngOnInit(): void { }
}
