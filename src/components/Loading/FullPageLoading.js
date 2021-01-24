import React from "react";
import loader from "../../assets/images/loader.gif";
import Navbar from "../Navbar/Navbar";

function FullPageLoading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <div style={{ textAlign: "center", width: "50%" }}>
        <img src={loader} alt="Please Wait" style={{ width: "150px" }} />
        <h2
          style={{
            fontFamily: "RONGDHONU",
            frontWeight: "normal",
            fontSize: "20px",
            textAlign: "center",
            color: "var(--text-color)",
          }}
        >
          দয়া করে
        </h2>
        <h1
          style={{
            fontFamily: "SHOBUJ",
            frontWeight: "normal",
            fontSize: "3.5rem",
            textAlign: "center",
            color: "var(--primary-color-dark)",
          }}
        >
          অপেক্ষা করুন
        </h1>
      </div>
    </div>
  );
}

export default FullPageLoading;
