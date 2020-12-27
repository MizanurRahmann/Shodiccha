import React from "react";
import "../styles/Banner.scss";
import dataAnalysis from "../assets/images/dataAnalysis.svg";

function Banner() {
    return (
        <div className="banner">
            <div className="banner__heading">
                <h1>
                    <span>স্বদিচ্ছা</span> ফাউন্ডেশনে
                </h1>
                <h2>আপ্নাকে স্বাগতম</h2>
            </div>
            <p>
                সদিচ্ছা একটি স্বেচ্ছাসেবী সংস্থা। <span>মানবতা</span>,{" "}
                <span>বন্ধন</span>, <span>সহযোগিতা</span> যার মূল নীতি।
            </p>
            <img src={dataAnalysis} alt="" />
        </div>
    );
}

export default Banner;
