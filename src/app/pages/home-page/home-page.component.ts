import { Component, OnInit } from '@angular/core';

import { UserService } from '../../Services/user-service.service';
import { BitcoinService } from '../../Services/bitcoin-service.service';
import { User } from '../../interfaces/user';
import { Move } from 'src/app/interfaces/move';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}

  // STATE
  user: User;
  USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  currUserCoinsUSD: string;
  rateUSD: string;

  // CREATED
  ngOnInit(): void {
    this.getUser();
  }
  
  //METHODS
  getUser(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user
      this.getRate();
    });
  }
  getRate(): void {
    this.bitcoinService.getRate().subscribe((rate) => {
      this.currUserCoinsUSD = this.USD.format(this.user.coins * (1 / rate));
      this.rateUSD = this.USD.format(1 / rate);
    });
  }

  public get moves(): Move[] {
    return this.user.moves;
    // return this.user.moves.filter((move,i)=> i < 3)
  }
}
