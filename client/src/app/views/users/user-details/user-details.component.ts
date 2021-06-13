import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import { BONUS_INIT } from '../../../constants/dev';
import { BonusTree } from '../../../models/bonusTree';
import { BonusService } from '../../../services/bonus.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  bonusTree: BonusTree;
  totalBonus: Number = 0;

  constructor(private usersService: UsersService, private bonusService: BonusService) { }

  getBonusTree(): void {
    this.bonusService.getBonusTree(this.user._id).subscribe((res: BonusTree) => {
      this.bonusTree = res;
      for (let level in this.bonusTree) {
        let levelInvitees = this.bonusTree[level]
        levelInvitees["levelBonus"] = levelInvitees.reduce((acc, invitee) => {
          acc += invitee.bonus
        }, 0)
      }
    })
  }

  getUserBonus(): void {
    this.bonusService.getUserBonus(this.user._id).subscribe((res) => {
      this.totalBonus = res.bonus
    })
  }

  ngOnInit(): void {
    this.getBonusTree();
    this.getUserBonus();
  }

}
