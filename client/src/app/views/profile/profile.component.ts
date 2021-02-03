import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}
  AdminData: any;
  ngOnInit(): void {
    this.getAdminData();
  }

  getAdminData() {
    this.authenticationService.adminData().subscribe((res) => {
      this.AdminData = res;
    });
  }
}
