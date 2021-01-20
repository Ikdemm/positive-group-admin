import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  onSubmit(): void {
    this.authenticationService.login(this.loginForm.value).subscribe((res) => {
      if (res) {
        this.router.navigate(["/dashboard"]);
      }
    });
  }

  ngOnInit(): void {}

}
