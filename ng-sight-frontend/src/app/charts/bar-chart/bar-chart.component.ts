import { Component, OnInit } from '@angular/core';


const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 58, 80, 81, 56, 54, 30], label: 'Q3 Sales' },
  { data: [32, 45, 11, 84, 24, 99, 22], label: 'Q4 Sales' }

];

const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOpitons: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit(): void {
  }

}
