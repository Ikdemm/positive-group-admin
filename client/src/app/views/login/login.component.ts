import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
import { LocalStorageService } from "../../services/local-storage.service";
import { FormGroup, FormControl } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  onSubmit(): void {
    this.authenticationService.login(this.loginForm.value).subscribe((res) => {
      if (res.accessToken) {
        this.localStorageService.set("email", this.loginForm.value.email)
        this.localStorageService.set("accessToken", res.accessToken);
        this.router.navigate(["/dashboard"]);
      }
    }, (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.error.message,
      });
    });
  }

  goToForgotPassword() {
    this.router.navigate(["/forgot-password"]);
  }

  ngOnInit(): void { }
}
