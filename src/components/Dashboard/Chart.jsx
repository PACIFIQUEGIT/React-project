import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import './Chart.css'; // Assuming you create a Chart.css for styling

const Chart = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              boxWidth: 10,
              font: {
                size: 12,
              },
            },
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              maxRotation: 0,
              minRotation: 0,
              autoSkip: true,
              maxTicksLimit: 6,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              maxTicksLimit: 6,
            },
          },
        },
      };
    
      const labels = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ];
    
      const data = {
        labels,
        datasets: [
          {
            label: "Number of customers",
            data: [20, 43, 10, 54, 8, 23, 40, 23, 56, 87, 44, 10],
            backgroundColor: "#FFBF00",
          },
          {
            label: "Orders",
            data: [24, 26, 16, 10, 20, 40, 46, 49, 72, 34, 54, 60],
            backgroundColor: "#111827",
          },
        ],
      };

  return (
    <div className="chart-container">

      <div className="revenue-chart">
      
        <div className="leftchart">
          <h2 className="h2">
            Revenue Chart
          </h2>
          <div className="filter">
            <span className="">
              Filter:
            </span>
            <select className="">
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="bar">
          <Bar style={{height: '100%'}} options={options} data={data} />
        </div>
      
      </div>

      <div className="key-metrics">
      
        <h2 className="h2">
          Key Metrics
        </h2>
        <div className="contents">
          {[
            { title: "Highest donation", value: "$500" },
            { title: "New donors", value: "125" },
            { title: "Upcoming events", value: "8" },
            { title: "Hot Items", value: "12" },
          ].map((metric, index) => (
            <div key={index} className="numbs">
              <h3 className="">
                {metric.title}
              </h3>
              <p className="">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      
      </div>
      
    </div>
  );
};

export default Chart;













