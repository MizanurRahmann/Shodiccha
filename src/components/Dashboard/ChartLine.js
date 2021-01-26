import React from "react";
import { Line } from "react-chartjs-2";

//Assets
import member1 from "../../assets/images/member-1.png";
import member2 from "../../assets/images/member-7.png";
import member3 from "../../assets/images/member-8.png";
import member4 from "../../assets/images/member-2.png";
import member5 from "../../assets/images/member-3.png";
import member6 from "../../assets/images/member-4.png";
import member7 from "../../assets/images/member-5.png";
import member8 from "../../assets/images/member-6.png";
import member9 from "../../assets/images/member-10.png";

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
      data: [7500, 10000, 11500, 9000, 9878, 8000, 9500, 10000, 9500],
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

      <div className="donours">
        <div
          style={{
            color: "gray",
            fontWeight: "normal",
            fontSize: "18px",
            marginBottom: "10px",
          }}
        >
          শীর্ষ ডোনারবৃন্দ
        </div>

        <div className="donour">
          <img src={member1} alt="" />
          <img src={member2} alt="" />
          <img src={member3} alt="" />
          <img src={member4} alt="" />
          <img src={member5} alt="" />
          <img src={member6} alt="" />
          <img src={member7} alt="" />
          <img src={member8} alt="" />
          <img src={member9} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ChartLine;
