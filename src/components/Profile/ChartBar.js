import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "JAN",
    "FEB",
    "MARCH",
    "APR",
    "MAY",
    "JUN",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      label: "Participated",
      data: [4, 1, 2, 1, 2, 0, 1, 1, 0, 0, 1, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
    },
    {
      label: "Event",
      data: [4, 4, 4, 2, 2, 0, 7, 1, 1, 0, 4, 4],
      backgroundColor: "#EDF0F5",
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function ChartBar() {
  return (
    <div className="chartBar">
      <h1 style={{ color: "var(--text-color)", fontSize: "25px" }}>অংশগ্রহন</h1>
      <h2
        style={{
          color: "gray",
          fontSize: "18px",
          fontWeight: "normal",
          marginBottom: "30px",
        }}
      >
        শেষ ৮ মাসে আপনার অংশগ্রহনের পরিমান
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default ChartBar;
