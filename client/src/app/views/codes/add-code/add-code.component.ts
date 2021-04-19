import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { CoursesService } from '../../../services/courses.service';


@Component({
  selector: 'app-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.css']
})
export class AddCodeComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  @ViewChild('codeForm') codeForm: NgForm;

  courses: Array<object> = []

  codeTypes = ['activation', 'credit', 'course'];

  selectedForm = 'course';

  getCourses(): void {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
    })
  }

  onChangeForm($event): void {
    console.log($event.target.value)
    this.selectedForm = $event.target.value
    console.log(this.codeForm.value)
  }

  onSubmit(): void {
    switch (this.selectedForm) {
      case 'course':
        console.log('course')
      case 'activation':
        console.log('activation')
      case 'credit':
        console.log('credit')
    }
  }

  ngOnInit(): void {
    this.getCourses()
  }

}
