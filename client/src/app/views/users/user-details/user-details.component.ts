import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import { BONUS_INIT } from '../../../constants/dev';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  inviteesList: object;
  // bonus: Array<Number> = new Array(10);
  bonus = BONUS_INIT;

  constructor(private usersService: UsersService) { }

  getUserInvitees(): void {
    this.usersService.getUserInvitees(this.user._id).subscribe(response => {
      this.inviteesList = response;
      console.log(this.inviteesList)
      this.calculateBonus()
    })
  }

  calculateBonus(): void {
    for (let i = 1; i < 11; i++) {
      let bonus = 0
      this.inviteesList[`level${i}Invitees`].map(invitee => {
        if (invitee.isActivated) {
          bonus += 5
        }
      })
      this.bonus[i] = bonus
    }
    console.log(this.bonus)
  }

  ngOnInit(): void {
    this.getUserInvitees();
  }

}
