import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import notFound from "../assets/images/notFound.svg";
import Navbar from "../components/Navbar/Navbar";

function NoFound() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <div
        style={{
          width: "50%",
          minHeight: "50vh",
          textAlign: "center",
          fontFamily: "SHOBUJ",
        }}
      >
        <img src={notFound} width="60%" />
        <h1
          style={{
            fontSize: "40px",
            color: "var(--text-color)",
            marginBottom: "25px",
          }}
        >
          আপনার অনুরোধকৃত পেজ টি খুজে পাওয়া যাচ্ছে না
        </h1>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "var(--primary-color-dark)",
            fontSize: "18px",
            border: "3px solid var(--primary-color-dark)",
            borderRadius: "8px",
            padding: "10px 30px",
          }}
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}

export default NoFound;
