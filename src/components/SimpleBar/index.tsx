import React from "react";

import ReactApexChart from "react-apexcharts";
import "./style.css";

const SimpleBar: React.FC = () => {
  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const options = {
    chart: {
      height: 350,
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };

  return (
    <div className="SimpleBarContainer">
      <div className="TitleColor">Scatter</div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={400}
      />{" "}
    </div>
  );
};

export default SimpleBar;
