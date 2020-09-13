import { Component, OnInit, Input } from '@angular/core';
import { BitcoinService } from 'src/app/Services/bitcoin-service.service';
import { Rate } from '../../interfaces/rate';
import { Chart } from '../../interfaces/chart';
@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() rate: Rate;
  chart: Chart;

  isReady: boolean = false;
  constructor(private bitcoinService: BitcoinService) {}
  // statistics: any;
  ngOnInit(): void {

    if (this.rate) {
      this.getStatistics();
    }
  }
  getStatistics() {
    console.log(this.rate, 'rate');

    this.bitcoinService
      .getStatistics(this.rate.name)
      .subscribe((statistics) => {
        this.chart = {
          type: 'AreaChart',
          title: statistics.description,
          data: statistics.values.map((val) => {
            return [new Date(val.x * 1000), val.y];
          }),
          columnNames: ['Date', statistics.unit],
          options: {
            colors: [this.rate.color],
            animation: {
              duration: 1000,
              easing: 'liner',
              startup: true,
            },
            titleTextStyle: { fontSize: 21 },
          },
        };
      });
  }
  // async getStatistics() {
  //   this.statistics = await this.bitcoinService.getStatistics(this.rate.name);
  //   this.chart = {
  //     type: 'AreaChart',
  //     title: this.statistics.description,
  //     data: this.statistics.values.map((val) => {
  //       return [new Date(val.x * 1000), val.y];
  //     }),
  //     columnNames: ['Date', this.statistics.unit],
  //     options: {
  //       colors: [this.rate.color],
  //       animation: {
  //         duration: 1000,
  //         easing: 'liner',
  //         startup: true,
  //       },
  //       titleTextStyle: { fontSize: 21 },
  //       is3D: true,
  //       // legend: { position: 'none' },
  //       hAxis: {
  //         // textPosition: 'none',
  //         // gridlines: { count: 0, color: 'transparent' },
  //       },
  //       vAxis: {
  //         // textPosition: 'none',
  //         // gridlines: { count: 0, color: 'transparent' }
  //       },
  //     },
  //   };
  // }
}
