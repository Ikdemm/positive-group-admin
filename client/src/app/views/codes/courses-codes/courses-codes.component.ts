import { Component, OnInit } from '@angular/core';
import { CodesService } from '../../../services/codes.service';
import Swal from "sweetalert2";
import { CoursesService } from '../../../services/courses.service';
import { CourseCode } from '../../../models/courseCode.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-courses-codes',
  templateUrl: './courses-codes.component.html',
  styleUrls: ['./courses-codes.component.css']
})
export class CoursesCodesComponent implements OnInit {

  constructor(private codesService: CodesService, private coursesService: CoursesService, private usersService: UsersService) { }

  coursesCodes: Array<any>

  getCoursesCodes(): void {
    this.codesService.getCoursesCodes().subscribe((res) => {
      this.coursesCodes = res
      this.coursesCodes.map(code => {
        this.coursesService.getCourseById(code.course).subscribe((course) => {
          code.course = course.name
        })
        code.usedBy && this.usersService.getUserById(code.usedBy).subscribe((user) => {
          code.usedBy = user.firstName + " " + user.lastName
        })
        code["createdOn"] = new Date(code['createdOn']).toDateString()
        code.usedOn && (code["usedOn"] = new Date(code.usedOn).toDateString())
      })
    })
  }

  deleteCode(codeId): void {
    Swal.fire({
      title: 'Vous êtes sûr?',
      text: "Les données supprimées seront perdus",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé!',
          'Suppression terminée avec succès',
          'success'
        )
        this.codesService.deleteCode(codeId, 'course').subscribe((res) => {
          this.getCoursesCodes();
        })
      }
    })
  }

  ngOnInit(): void {
    this.getCoursesCodes();
  }

}
