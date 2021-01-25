import React from "react";
import { Polar } from "react-chartjs-2";

function Chart() {
  const data = {
    labels: ["চিকিৎসা", "পরিবেশ", "শিক্ষা", "দারিদ্রতা"],
    datasets: [
      {
        label: "# of Votes",
        data: [15, 20, 25, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chartPolar">
      <h1 style={{ color: "var(--text-color)", fontSize: "25px" }}>অবদান</h1>
      <h2
        style={{
          color: "gray",
          fontSize: "18px",
          fontWeight: "normal",
          marginBottom: "30px",
        }}
      >
        বিভিন্ন বিষয়সমূহে আমাদের অবদানসমূহ
      </h2>
      <Polar data={data} options={{ legend: { position: "right" } }} />
    </div>
  );
}

export default Chart;
