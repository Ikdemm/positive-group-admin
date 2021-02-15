import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<User>;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe((users: Array<User>) => {
      this.users = users
    })
  }

  deleteUser(id): void {
    this.usersService.deleteUser(id).subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "Done",
        text: `Utilisateur supprimé`,
      });
      this.getUsers();
    });
  }

  upgradeUser(user): void {
    user.isActivated = true;
    this.usersService.updateUser(user).subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "Done",
        text: `compte activé`,
      });
    })
  }

}
