import { Component } from "@angular/core";
import { navItems } from "../../_nav";
import { Router } from "@angular/router";
@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent {
  constructor(private router: Router) { }
  public sidebarMinimized = false;
  public navItems = navItems;

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
}
