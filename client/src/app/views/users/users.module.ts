import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [UsersListComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ]
})
export class UsersModule { }
