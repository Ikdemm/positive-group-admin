import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from "@angular/router";
import { AuthenticationService } from "../authentication.service";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let authenticated = this.authenticationService.check();
    if (authenticated) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;

    //   map((response: { authenticated: boolean }) => {
    //     if (response.authenticated) {
    //       return true;
    //     }
    //     this.router.navigate(["/login"]);
    //     return false;
    //   }),
    //   catchError((error) => {
    //     this.router.navigate(["/login"]);
    //     return of(false);
    //   })
    // );
  }
}
