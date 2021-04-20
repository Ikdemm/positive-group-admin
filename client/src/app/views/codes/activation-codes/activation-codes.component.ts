import { Component, OnInit } from '@angular/core';
import { CodesService } from '../../../services/codes.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-activation-codes',
  templateUrl: './activation-codes.component.html',
  styleUrls: ['./activation-codes.component.css']
})
export class ActivationCodesComponent implements OnInit {

  constructor(private codesService: CodesService) { }

  activationCodes: Array<object>

  getActivationCodes(): void {
    this.codesService.getActivationCodes().subscribe((res) => {
      this.activationCodes = res
      this.activationCodes.map(code => {
        code['createdOn'] = new Date(code['createdOn']).toDateString()
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
        this.codesService.deleteCode(codeId, 'activation').subscribe((res) => {
          this.getActivationCodes();
        })
      }
    })

  }

  ngOnInit(): void {
    this.getActivationCodes();
  }

}
