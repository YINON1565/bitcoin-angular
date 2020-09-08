import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/interfaces/move';
import { Chart } from 'src/app/interfaces/chart';

@Component({
  selector: 'chart-move',
  templateUrl: './chart-move.component.html',
  styleUrls: ['./chart-move.component.scss'],
})
export class ChartMoveComponent implements OnInit {
  @Input() moves: Move[];
  constructor() {}
  chart: Chart;
  isReady : boolean = false;

  ngOnInit(): void {
    this.setChart();
  }
  setChart() {
    this.chart = {
      title: '',
      type: 'AreaChart',
      data: this.moves.map((move) => [new Date(move.at), move.amount]),
      // columnNames: [],
      columnNames: ['Date', 'Money transfers'],
      options: {
        colors: ['blue'],
        animation: {
          duration: 1000,
          easing: 'liner',
          startup: true,
        }
      },
    };
  }
}
