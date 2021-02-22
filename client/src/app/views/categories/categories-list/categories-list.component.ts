import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../../../services/categories.service";
import { Category } from "../../../models/category.model";
import { MatDialog } from "@angular/material/dialog";
import { EditCategoryComponent } from "../edit-category/edit-category.component";
import Swal from "sweetalert2";

@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.css"],
})
export class CategoriesListComponent implements OnInit {

  categories: Array<Category>;

  constructor(
    private categoriesService: CategoriesService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService
      .getCategories()
      .subscribe((data: Array<Category>) => {
        this.categories = data;
      });
  }

  deleteCategory(id) {
    this.categoriesService.deleteCategory(id).subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "Done",
        text: `Category deleted`,
      });
      this.getCategories();
    });
  }

  openEditCategory(category: Category): void {
    const dialogRef = this.dialogRef.open(EditCategoryComponent, {
      width: "600px",
    });
    dialogRef.componentInstance.category = category;
    dialogRef.afterClosed().subscribe(() => {
      this.getCategories();
    });
  }
}
