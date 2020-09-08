import { Component, OnInit, Input } from '@angular/core';
import { BitcoinService } from 'src/app/Services/bitcoin-service.service';
import {Rate} from '../../interfaces/rate'
import {Chart} from '../../interfaces/chart'
@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() rate: Rate;
  chart: Chart;
  

  isReady : boolean = false;
  constructor(private bitcoinService : BitcoinService) {}
  statistics: any;
  ngOnInit(): void {
    this.getStatistics();
  }
  async getStatistics() {
        this.statistics = await this.bitcoinService.getStatistics(this.rate.name)
        console.log(this.statistics);
        this.chart = {
          type: 'AreaChart',
          title: this.statistics.description,
          data: this.statistics.values.map(val=>{
            return [
              new Date(val.x * 1000), val.y
            ]
          }),
          columns: [this.statistics.priod, this.statistics.unit],
          options: {
            colors: [this.rate.color],
            animation: {
              duration: 1000,
              easing: 'liner',
              startup: true
            },
            is3D: true
          },
        }
        
  }
}
