import { Component, OnInit } from '@angular/core';
import { CodesService } from '../../../services/codes.service';

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
      console.log(res)
      this.activationCodes = res
    })
  }

  ngOnInit(): void {
    this.getActivationCodes();
  }

}
