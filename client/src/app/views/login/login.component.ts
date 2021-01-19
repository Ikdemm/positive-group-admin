import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit(email, password) {
    this.authenticationService.login(email, password).subscribe((res) => {
      if (res) {
        this.router.navigate(["/dashboard"]);
      }
    });
  }
  ngOnInit() {}
}
