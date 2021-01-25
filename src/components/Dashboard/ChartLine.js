import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      data: [7500, 10000, 11500, 9000, 9878, 8000, 9500, 10000],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "#f8adb5",
      pointBackgroundColor: "#7d3a56",
      pointRadius: "8",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

function ChartLine() {
  return (
    <div style={{ width: "100%", padding: "0 30px", fontFamily: "SHOBUJ" }}>
      <h1 style={{ color: "var(--text-color)", fontSize: "25px" }}>
        গড় ডোনেশন
      </h1>
      <h2
        style={{
          color: "gray",
          fontWeight: "normal",
          fontSize: "18px",
          marginBottom: "20px",
        }}
      >
        সদস্য এবং ডোনারদের থেকে প্রাপ্ত ডোনেশনের পরিমান
      </h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default ChartLine;
