import { Component, OnInit } from '@angular/core';
import { CodesService } from '../../../services/codes.service';

@Component({
  selector: 'app-courses-codes',
  templateUrl: './courses-codes.component.html',
  styleUrls: ['./courses-codes.component.css']
})
export class CoursesCodesComponent implements OnInit {

  constructor(private codesService: CodesService) { }

  coursesCodes: Array<object>

  getCoursesCodes(): void {
    this.codesService.getCoursesCodes().subscribe((res) => {
      console.log(res)
      this.coursesCodes = res
    })
  }

  deleteCode(codeId): void {
    this.codesService.deleteCode(codeId, 'course').subscribe((res) => {
      this.getCoursesCodes();
    })
  }

  ngOnInit(): void {
    this.getCoursesCodes();
  }

}
