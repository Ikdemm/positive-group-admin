import { Component, OnInit } from '@angular/core';
import { CodesService } from '../../../services/codes.service';

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
      console.log(res)
      this.creditCodes = res
    })
  }

  deleteCode(codeId): void {
    this.codesService.deleteCode(codeId, 'credit').subscribe((res) => {
      this.getCreditCodes();
    })
  }

  ngOnInit(): void {
    this.getCreditCodes();
  }

}
