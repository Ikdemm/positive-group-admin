import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { MatDialogRef } from "@angular/material/dialog";
import { Chapter } from "../../../models/chapter.model";
import { Course } from "../../../models/course.model";
import { ChaptersService } from "../../../services/chapters.service";
import { CoursesService } from "../../../services/courses.service";
import Swal from "sweetalert2";


@Component({
  selector: "app-edit-chapter",
  templateUrl: "./edit-chapter.component.html",
  styleUrls: ["./edit-chapter.component.css"],
})
export class EditChapterComponent implements OnInit {
  chapter: Chapter;
  courses: Array<Course>;

  editChapterForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditChapterComponent>,
    private coursesService: CoursesService,
    private chaptersService: ChaptersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  createForm(): void {
    this.editChapterForm = this.formBuilder.group({});
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onSubmit(name, course, description, video) {
    this.chapter = {
      _id: this.chapter._id,
      name: name,
      course: course,
      description: description,
      video: video,
    };
    this.chaptersService.editChapter(this.chapter).subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "Succès",
        text: `Chapitre modifié avec succès`,
      }).then(() => {
        this.closeModal();
        this.router.navigate(['/chapters/list'])
      })

    });
  }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
    this.createForm();
  }
}
