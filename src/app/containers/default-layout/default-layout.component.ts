import { Component, OnInit } from "@angular/core";
import { navItems } from "../../_nav";
import { Router } from "@angular/router";
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent implements OnInit {
  constructor(private router: Router, private requestsService: RequestsService) { }
  public sidebarMinimized = false;
  public navItems = navItems;
  requestsNumber: Number;

  getRequests(): void {
    this.requestsService.getAllCoursesRequests().subscribe((coursesRequests) => {
      this.requestsService.getAllActivationRequests().subscribe((activationRequests) => {
        this.requestsNumber = coursesRequests.length + activationRequests.length
      })
    })
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logOut() {
    localStorage.removeItem("authenticated");
    this.router.navigate(["/login"]);
  }
  goToProfile() {
    this.router.navigate(["/profile"]);
  }

  ngOnInit(): void {
    this.getRequests()
  }

}
