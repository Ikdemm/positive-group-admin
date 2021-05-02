import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router'
// import { Chapter } from "../../../models/chapter.model";
import { ChaptersService } from "../../../services/chapters.service";
import Swal from "sweetalert2";
import { Course } from "../../../models/course.model";
import { CoursesService } from "../../../services/courses.service";


@Component({
  selector: "app-add-chapter",
  templateUrl: "./add-chapter.component.html",
  styleUrls: ["./add-chapter.component.css"],
})
export class AddChapterComponent implements OnInit {
  courses: Array<Course>;

  chapterForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    course: new FormControl(""),
    video: new FormControl(""),
  });

  constructor(
    private chaptersService: ChaptersService,
    private coursesService: CoursesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.coursesService.getCourses().subscribe((courses: Array<Course>) => {
      this.courses = courses;
    });
  }

  onSubmit() {
    this.chaptersService.addChapter(this.chapterForm.value).subscribe((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: "Succès",
          text: `Chapitre créé avec succès`,
        }).then(() => {
          this.router.navigate(['/chapters/list'])
        })
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: `Une erreur a eu lieu`,
        });
      }
    });
  }
}
