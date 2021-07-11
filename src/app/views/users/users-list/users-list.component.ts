import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import { DefaultInviterService } from '../../../services/default-inviter.service';
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
    private defaultInviterService: DefaultInviterService,
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
      confirmButtonText: 'Supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé!',
          'Utilisateur supprimé avec succès',
          'success'
        )
        this.usersService.deleteUser(id).subscribe((res) => {
          this.getUsers();
        });
      } else if (result.isDismissed) {
        this.swalWithBootstrapButtons.fire(
          'Annulé',
          'Opération annulée',
          'error'
        )
      }
    })

  }

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  activateAccount(user): void {
    Swal.fire({
      icon: 'warning',
      title: 'Activer le compte?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, Confirmer!'
    }).then((result) => {
      if (result.isConfirmed) {
        user.accountType = 'premium';
        this.usersService.updateUser(user).subscribe((res) => {
          if (res) {
            Swal.fire({
              icon: "success",
              title: "Activation",
              text: "compte activé avec succès",
            }).then(() => {
              this.getUsers();
            })
          } else {
            Swal.fire({
              icon: "error",
              title: "Erreur",
              text: "Une erreur s'est produite",
            });
          }
        })
      } else if (result.isDismissed) {
        this.swalWithBootstrapButtons.fire(
          'Annulé',
          'Opération annulée',
          'error'
        )
      }
      
    })

  }

  deactivateAccount(user): void {
    Swal.fire({
      icon: 'warning',
      title: 'Désactiver le compte?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Confirmer!'
    }).then((result) => {
      if (result.isConfirmed) {
        user.accountType = 'free';
        this.usersService.updateUser(user).subscribe((res) => {
          if (res) {
            Swal.fire({
              icon: "success",
              title: "Activation",
              text: "compte désactivé avec succès",
            }).then(() => {
              this.getUsers();
            })
          } else {
            Swal.fire({
              icon: "error",
              title: "Erreur",
              text: "Une erreur s'est produite",
            });
          }
        })
      } else if (result.isDismissed) {
        this.swalWithBootstrapButtons.fire(
          'Annulé',
          'Opération annulée',
          'error'
        )
      }
    })
  }

  changeUserSubscription(user): void {
    if (user.accountType === 'free') {
      this.activateAccount(user);
    }
    if (user.accountType === "premium") {
      this.deactivateAccount(user)
    }
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

  changeDefaultInviter(user: User): void {
    Swal.fire({
      icon: 'warning',
      title: "Assigner l'utilisateur comme parrain?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Confirmer!'
    }).then((result) => {
      if (result.isConfirmed) {
        if (!user.isDefaultInviter) {
          this.defaultInviterService.makeDefaultInviter(user._id).subscribe((res) => {
            if (res.message == "success") {
              Swal.fire({
                icon: "success",
                title: "Succès",
                text: "Assigné avec succès",
              })
              this.getUsers();
            } else if (res.message == 'Inviter exists') {
              Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "Un parrain par défaut existe déjà",
              })
              this.getUsers();
            } else {
              Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "Une erreur a eu lieu",
              });
            }
          })
        } else {
          this.defaultInviterService.unassignDefaultInviter().subscribe((res) => {
            if (res.message == "success") {
              Swal.fire({
                icon: "success",
                title: "Succès",
                text: "Données sauvegardés avec succès",
              })
              this.getUsers();
            } else {
              Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "Une erreur a eu lieu",
              });
            }
          })
        }
      } else if (result.isDismissed) {
        this.swalWithBootstrapButtons.fire(
          'Annulé',
          'Opération annulée',
          'error'
        )
      }

    })
  }

}