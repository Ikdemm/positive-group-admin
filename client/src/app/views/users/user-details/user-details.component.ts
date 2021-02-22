import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
