import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
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
    private router: Router
  ) { }

  onSubmit(): void {
    this.authenticationService.login(this.loginForm.value).subscribe((res) => {
      if (res.message === "SUCESS!") {
        localStorage.setItem("authenticated", "true");
        this.router.navigate(["/dashboard"]);
      } else if (res.message === "WRONG PASSWORD") {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: `Mot de passe incorrect`,
        });
      } else if (res.message === "ADMIN NOT FOUND!") {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: `Erreur d'authentification`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: `Erreur d'authentification`,
        });
      }
    });
  }

  ngOnInit(): void { }
}
