import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  name = '';
  signup(name): void {
    this.userService.signUp(name).subscribe((loggedinUser) => {
      if (loggedinUser) {
        this.router.navigate(['/']);
      }
    });
  }
}
