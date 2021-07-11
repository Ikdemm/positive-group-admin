import { Component, SecurityContext, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { RequestsService } from '../../../services/requests.service';
import Swal from "sweetalert2";

// such override allows to keep some initial values

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  selector: 'app-courses-requests',
  templateUrl: './courses-requests.component.html',
  styleUrls: ['./courses-requests.component.css'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class CoursesRequestsComponent implements OnInit {

  constructor(private requestsService: RequestsService) { }

  coursesRequests: Array<any>;

  getCoursesRequests(): void {
    this.requestsService.getAllCoursesRequests().subscribe((requests) => {
      this.coursesRequests = requests;
    })
  }

  acceptCourseRequest({ user, course }): void {
    user.courseRequests = user.courseRequests.filter((request) => {
      return request !== course._id
    })
    user.courses.push(course._id)
    this.requestsService.respondToCourseRequest(user).subscribe((response) => {
      this.getCoursesRequests()
    })
  }

  ignoreCourseRequest({ user, course }): void {
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
          'Ignoré!',
          'Demande ignorée avec succès',
          'success'
        )
        user.courseRequests = user.courseRequests.filter((request) => {
          return request !== course._id
        })
        this.requestsService.respondToCourseRequest(user).subscribe((response) => {
          this.getCoursesRequests()
        })
      }
    })

  }

  ngOnInit(): void {
    this.getCoursesRequests()
  }

}

