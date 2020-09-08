import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/Services/bitcoin-service.service';
import { Rate } from 'src/app/interfaces/rate';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss'],
})
export class StatisticPageComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) {}
  rates : Rate[] = [
    { name: 'market-price', color: 'red' },
    { name: 'trade-volume', color: 'blue' },
    { name: 'avg-block-size', color: 'green' },
    { name: 'n-transactions', color: 'orange' },
  ];
  ngOnInit(): void {
  }
}
