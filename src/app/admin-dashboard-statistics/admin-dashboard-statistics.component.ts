import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-admin-dashboard-statistics',
  templateUrl: './admin-dashboard-statistics.component.html',
  styleUrls: ['./admin-dashboard-statistics.component.scss'],
  standalone: true,
  imports: [NgChartsModule]
})
export class AdminDashboardStatisticsComponent implements OnInit {

  public chart: any;
  public chart2: any;
  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: [
          '2022-05-14', '2022-05-15', '2022-05-17'],
        datasets: [
          {
            label: "Sales",
            data: [467, 576, 572,], // Remove the quotes around the numbers
            backgroundColor: ['#4ac0c0', '#fe6383 ', '#36a2eb',] // Add colors for each data point
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
      }
    });
    this.chart2 = new Chart("chart2", {
      type: 'pie',
      data: {
        labels: [
          '2022-05-14', '2022-05-15', '2022-05-17'],
        datasets: [
          {
            label: "Sales",
            data: [467, 576, 572,], // Remove the quotes around the numbers
            backgroundColor: ['#9a69fc', '#36a2eb', '#ffce58'], // Add colors for each data point
            borderAlign:'center',
            borderColor:'#333'
          }
        ]
      },
      options: {
        responsive: true, // Enable responsiveness
        aspectRatio: 2.5, // Set the desired aspect ratio (width:height)
        plugins: {
          // legend: {
          //   display: true, // Display the legend
          //   position: 'bottom' // Set the position of the legend
          // }
        }
      }
    });
  }
  ngOnInit(): void {
    this.createChart()
  }
}
