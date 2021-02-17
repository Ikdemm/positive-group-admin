import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./services/auth/auth.guard";
// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { ForgotPasswordComponent } from "./views/forgot-password/forgot-password.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page",
    },
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    data: {
      title: "Forgot Password",
    },
  },
  // {
  //   path: "profile",
  //   component: ProfileComponent,
  //   data: {
  //     title: "Profile Page",
  //   },
  //   canActivate: [AuthGuard],
  // },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: "chapters",
        loadChildren: () =>
          import("./views/chapters/chapters.module").then(
            (m) => m.ChaptersModule
          ),
      },
      {
        path: "categories",
        loadChildren: () =>
          import("./views/categories/categories.module").then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: "courses",
        loadChildren: () =>
          import("./views/courses/courses.module").then((m) => m.CoursesModule),
      },
      {
        path: "users",
        loadChildren: () =>
          import("./views/users/users.module").then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import("./views/profile/profile.module").then((m) => m.ProfileModule)
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "widgets",
        loadChildren: () =>
          import("./views/widgets/widgets.module").then((m) => m.WidgetsModule),
      },
    ],
  },
  { path: "**", component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
