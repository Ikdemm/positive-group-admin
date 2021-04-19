import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { CoursesService } from '../../../services/courses.service';


@Component({
  selector: 'app-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.css']
})
export class AddCodeComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  courses: Array<object> = []

  codeTypes = ['activation', 'credit', 'course'];

  selectedForm = 'course';

  activationCodeForm = new FormGroup({

  })

  courseCodeForm = new FormGroup({

  })

  creditCodeForm = new FormGroup({

  })

  getCourses(): void {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
    })
  }

  onChangeForm($event): void {
    console.log($event.target.value)
    this.selectedForm = $event.target.value
  }

  ngOnInit(): void {
    this.getCourses()
  }

}
