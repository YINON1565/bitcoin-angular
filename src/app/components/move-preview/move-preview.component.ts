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
  rate: number;
  USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  moveFormatUSD : string;
  async ngOnInit(): Promise<void> {
    this.rate = await this.bitcoinService.getRate();
    this.moveFormatUSD = this.USD.format((this.move.amount * (1 / this.rate)));
  }
}
