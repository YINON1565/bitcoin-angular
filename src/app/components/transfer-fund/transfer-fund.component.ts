import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact;
  @Input() maxCoins: number;
  @Output() transferCoins = new EventEmitter<number>();

  constructor() { }
  amount = 0;

  ngOnInit(): void {
  }
  onTransferCoins() {
    if (this.amount > this.maxCoins) this.amount = this.maxCoins
    if (this.amount <= 0) return
    this.transferCoins.emit(this.amount)
    this.amount = 0
  }
}
