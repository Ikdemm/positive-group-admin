import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Course } from "../../../models/course.model";
import { CoursesService } from "../../../services/courses.service";
import { CategoriesService } from "../../../services/categories.service";
import { Category } from "../../../models/category.model";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.css"],
})
export class AddCourseComponent implements OnInit {
  categories: Array<Category>;

  courseForm = new FormGroup({
    name: new FormControl(""),
    category: new FormControl(""),
    description: new FormControl(""),
    duration: new FormControl(0),
  });

  selectedImage: File = null;

  constructor(
    private coursesService: CoursesService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories: Array<Category>) => {
        this.categories = categories;
      });
  }

  onImageSelected(event) {
    this.selectedImage = <File>event.target.files[0];
  }

  onSubmit() {
    let formData = new FormData();
    formData.append("name", this.courseForm.value.name);
    formData.append("description", this.courseForm.value.description);
    formData.append("duration", this.courseForm.value.duration);
    formData.append("category", this.courseForm.value.category);
    formData.append("courseImage", this.selectedImage, this.selectedImage.name);
    this.coursesService
      .createCourse(formData)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
