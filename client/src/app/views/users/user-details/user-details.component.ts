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
  inviteesList: object = {};
  // bonus: Array<Number> = new Array(10);
  bonus = BONUS_INIT;
  totalBonus: Number = 0;

  levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(private usersService: UsersService) { }

  getUserInvitees(): void {
    this.usersService.getUserInvitees(this.user._id).subscribe(response => {
      this.inviteesList = response;
      this.calculateBonus()
    })
  }

  calculateBonus(): void {

    for (let i = 1; i < 11; i++) {
      let bonus = 0
      this.inviteesList[`level${i}Invitees`].map(invitee => {
        if (invitee.accountType == 'premium') {
          bonus += 5
        }
        bonus += invitee.courses * 5
      })
      this.bonus[i] = bonus
    }

    let reachedLevel = (this.user['courses'].length >= 5) ? 10 : this.user['courses'].length + 5

    for (let j = 1; j <= reachedLevel; j++) {
      this.totalBonus += this.bonus[j]
    }


  }

  ngOnInit(): void {
    for (let i = 1; i < 11; i++) {
      this.inviteesList[`level${i}Invitees`] = {}
    }
    this.getUserInvitees();
  }

}
