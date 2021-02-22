import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import Swal from "sweetalert2";
import { UserDetailsComponent } from '../user-details/user-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<User>;

  constructor(
    private usersService: UsersService,
    private dialogRef: MatDialog
  ) { }

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

  changeUserSubscription(user): void {
    user.isActivated = !user.isActivated;
    this.usersService.updateUser(user).subscribe((res) => {
      if (user.isActivated) {
        Swal.fire({
          icon: "success",
          title: "Activation",
          text: "compte activé avec succès",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Désactivation",
          text: "compte désactivé avec succès",
        });
      }

    })
  }

  openUserDetails(user: User): void {
    const dialogRef = this.dialogRef.open(UserDetailsComponent, {
      width: "1000px",
    });
    dialogRef.componentInstance.user = user;
    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

}
