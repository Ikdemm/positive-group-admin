import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CoursesService } from '../../../services/courses.service';
import { CodesService } from '../../../services/codes.service';


@Component({
  selector: 'app-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.css']
})
export class AddCodeComponent implements OnInit {

  constructor(private coursesService: CoursesService, private codesService: CodesService) { }

  @ViewChild('codeForm') codeForm: NgForm;

  courses: Array<object> = []

  codeTypes = ['activation', 'credit', 'course'];

  selectedForm = 'course';

  generatedCode: String = '';

  getCourses(): void {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
    })
  }

  onChangeForm($event): void {
    this.selectedForm = $event.target.value
  }

  onSubmit(): void {
    this.codesService.generateCode(this.codeForm.value).subscribe((res) => {
      this.generatedCode = res.code
    })
  }

  ngOnInit(): void {
    this.getCourses()
  }

}
