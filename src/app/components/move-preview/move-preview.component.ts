import { Component, OnInit, Input } from '@angular/core';
import { BitcoinService } from 'src/app/Services/bitcoin-service.service';
import { Move } from 'src/app/interfaces/move';

@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss'],
})
export class MovePreviewComponent implements OnInit {
  @Input() move: Move;
  @Input() isTitle: boolean;
  constructor(private bitcoinService: BitcoinService) {}
  USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  moveFormatUSD: string;
  ngOnInit(): void {
    this.bitcoinService.getRate().subscribe((rate) => {
      this.moveFormatUSD = this.USD.format(this.move.amount * (1 / rate));
    });
  }
}
