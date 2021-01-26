import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
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
    private formBuilder: FormBuilder
  ) {}

  createForm(): void {
    this.editChapterForm = this.formBuilder.group({});
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onSubmit(title, course, description, video) {
    this.chapter = {
      _id: this.chapter._id,
      title: title,
      course: course,
      description: description,
      video: video,
    };
    this.chaptersService.editChapter(this.chapter).subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "Done",
        text: `Chapter updated`,
      });
      this.closeModal();
    });
  }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
    this.createForm();
  }
}
