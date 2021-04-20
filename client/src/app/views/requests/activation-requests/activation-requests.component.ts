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
  selector: 'app-activation-requests',
  templateUrl: './activation-requests.component.html',
  styleUrls: ['./activation-requests.component.css'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class ActivationRequestsComponent implements OnInit {

  constructor(private requestsService: RequestsService) { }

  activationRequests: Array<object>

  acceptRequest(user): void {
    user.accountType = "premium"
    this.requestsService.respondToActivationRequest(user).subscribe((res) => {
      this.getRequests()
    })
  }

  ignoreRequest(user): void {

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
        user.accountType = "free"
        this.requestsService.respondToActivationRequest(user).subscribe((res) => {
          this.getRequests()
        })
      }
    })

  }

  getRequests(): void {
    this.requestsService.getAllActivationRequests().subscribe((requests) => {
      this.activationRequests = requests;
      console.log(this.activationRequests)
    })
  }

  ngOnInit(): void {
    this.getRequests()
  }

}
