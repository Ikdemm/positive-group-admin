import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Admin } from "../../models/admin.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  adminData: Admin;
  toggle = true;

  updateProfileForm = new FormGroup({
    email: new FormControl(""),
    phoneNumber: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    oldPassWord: new FormControl(""),
    newPassWord: new FormControl(""),
    confirmPassWord: new FormControl(""),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAdminData();
  }

  updatePassword() {
    const passwords = {
      oldPassWord: this.updateProfileForm.value.oldPassWord,
      newPassWord: this.updateProfileForm.value.newPassWord,
      confirmPassWord: this.updateProfileForm.value.confirmPassWord,
    };

    if (passwords.confirmPassWord !== passwords.newPassWord) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: `Erreur`,
      });
      return;
    }
    this.authenticationService
      .updateAdminPassWord(passwords)
      .subscribe((res: any) => {
        if (res.message === "SUCCESS!") {
          Swal.fire({
            icon: "success",
            title: "Done",
            text: `mot de pass mise à jour`,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops",
            text: `Erreur`,
          });
        }
      });
  }

  changeView() {
    this.toggle = !this.toggle;
  }

  getAdminData() {
    this.authenticationService.getAdminData().subscribe((res: Admin) => {
      this.adminData = res;
      this.updateProfileForm.reset({
        email: res.email,
        firstName: res.firstName,
        lastName: res.lastName,
        phoneNumber: res.phoneNumber,
      });
    });
  }

  onSubmit(): void {
    this.updateProfileForm.value.oldName = this.adminData.firstName;
    this.authenticationService
      .updateAdminData(this.updateProfileForm.value)
      .subscribe((res) => {
        if (res) {
          Swal.fire({
            icon: "success",
            title: "Done",
            text: `profil mise à jour`,
          });
          this.router.navigate(["/dashboard"]);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops",
            text: `Erreur`,
          });
        }
      });
  }
}
