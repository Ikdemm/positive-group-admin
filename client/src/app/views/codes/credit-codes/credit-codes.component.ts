import { Component, OnInit } from '@angular/core';
import { CodesService } from '../../../services/codes.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-credit-codes',
  templateUrl: './credit-codes.component.html',
  styleUrls: ['./credit-codes.component.css']
})
export class CreditCodesComponent implements OnInit {

  constructor(private codesService: CodesService) { }

  creditCodes: Array<object>

  getCreditCodes(): void {
    this.codesService.getCreditCodes().subscribe((res) => {
      this.creditCodes = res;
      this.creditCodes.map(code => {
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
        this.codesService.deleteCode(codeId, 'credit').subscribe((res) => {
          this.getCreditCodes();
        })
      }
    })

  }

  ngOnInit(): void {
    this.getCreditCodes();
  }

}
