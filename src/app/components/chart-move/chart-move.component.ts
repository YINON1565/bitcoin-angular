import { Component, OnInit, OnChanges, Input, ElementRef } from '@angular/core';
import { Move } from 'src/app/interfaces/move';
import { Chart } from 'src/app/interfaces/chart';

@Component({
  selector: 'chart-move',
  templateUrl: './chart-move.component.html',
  styleUrls: ['./chart-move.component.scss'],
})
export class ChartMoveComponent implements OnInit, OnChanges {
  @Input() moves: Move[] = [];
  constructor(private myElement : ElementRef) {}
  chart: Chart;
  isReady : boolean = false;

  ngOnInit(): void {
    this.setChart();
  }
  ngOnChanges(changes: any): void {
    if (changes.moves.firstChange) return
    const {previousValue, currentValue} =  changes.moves
    if (currentValue[0].at !== previousValue[0].at)  {
      console.log(this.moves.length);
      
      this.setChart()
      this.myElement.nativeElement.scrollIntoView()
    }
    
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
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
