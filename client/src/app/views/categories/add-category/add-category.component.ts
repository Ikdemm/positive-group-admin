import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CategoriesService } from "../../../services/categories.service";
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

  constructor(private categoriesService: CategoriesService) {}

  onSubmit() {
    this.categoriesService
      .createCategory(this.categoryForm.value)
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
      });
  }

  ngOnInit(): void {}
}
