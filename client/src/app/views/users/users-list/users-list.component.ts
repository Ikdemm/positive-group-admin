import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from "sweetalert2";

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
    Swal.fire({
      title: 'Vous êtes sûr?',
      text: "Les données supprimées seront perdus",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Ignoré!',
          'Demande ignorée avec succès',
          'success'
        )
        this.usersService.deleteUser(id).subscribe((res) => {
          this.getUsers();
        });
      }
    })

  }

  changeUserSubscription(user): void {
    user.accountType = 'premium';
    this.usersService.updateUser(user).subscribe((res) => {
      if (user.accountType == 'premium') {
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
