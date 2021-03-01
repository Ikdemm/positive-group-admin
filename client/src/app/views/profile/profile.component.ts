import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AdminService } from "../../services/admin.service";
import { Admin } from "../../models/admin.model";
import { LocalStorageService } from "../../services/local-storage.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {

  adminData: Admin;
  // adminEmail: string;

  updateProfileForm = new FormGroup({
    email: new FormControl(""),
    phoneNumber: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl(""),
  });

  constructor(private adminService: AdminService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.getAdminData();
  }

  async getAdminData() {
    try {
      let adminEmail = await this.localStorageService.get("email")
      this.adminService.getAdminData(adminEmail).subscribe((res: Admin) => {
        console.log(res)
        this.adminData = res;
        this.updateProfileForm.reset({
          email: res.email,
          firstName: res.firstName,
          lastName: res.lastName,
          phoneNumber: res.phoneNumber,
        });
      });
    } catch (e) {
      console.log(e)
    }
  }

  onSubmit(): void {
    this.updateProfileForm.value.oldName = this.adminData.firstName;
    this.adminService
      .updateAdminData(this.updateProfileForm.value)
      .subscribe((res) => {
        if (res) {
          Swal.fire({
            icon: "success",
            title: "Done",
            text: `profil mise à jour`,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops",
            text: `Something went wrong `,
          });
        }
      });
  }
}
