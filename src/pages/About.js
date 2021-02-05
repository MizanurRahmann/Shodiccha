import React from "react";

// Components
import Navbar from "../components/Navbar/Navbar";

// Assets & Styles
import image1 from "../assets/images/mohilaKormo.jpg";
import image2 from "../assets/images/siraj.jpg";
import "../styles/About.scss";

function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about__heading">
          <h1 className="heading">সম্পর্কিত</h1>
          <img className="image1" src={image1} alt="" />
          <img className="image2" src={image2} alt="" />
          <div className="quote">
            <p className="quote__text">
              <span>&#10077;</span> আমরা তখনই সুখি হবো যখন আমরা আনন্দের সাথে দান এবং
              কৃতজ্ঞচিত্তে সে দান গ্রহন করতে পারবো।
            </p>
            <p className="quote__author"> - মায়া এঞ্জেলোওউ</p>
          </div>
          <div className="text">
            আমরা একগুচ্ছ স্বেচ্ছাসেবক তাদের অক্লান্ত পরিশ্রমের সাহায্যে মানবতার
            জন্য সেবা দিয়ে যাচ্ছি। আমাদের রয়েছে ৪০ জনেরও বেশি কর্মঠ স্বেচ্ছাসেবক
            ও ২৫ জনের বেশি নিয়মিত ডোনার। আমরা বিভিন্ন দুস্থ্য ও অসহায় মানুষের
            শিক্ষা, চিকিৎসা ও স্বাভাবিক জীবন যাপনের নিমিত্তে অর্থ সাহায্য দিয়ে
            থাকি। এছাড়াও বিভিন্ন দূর্যোগে ক্ষতিগ্রস্ত এলাকার মেরামত, দূষিত এলাকা

            পরিষ্কারের মাধ্যমে পরিবেশ উন্নয়নেও ভূমিকা রেখে আসছি। মানবতার সেবা ও
            পরিবেশ পরিচর্যায় তাই আজই আমাদের সাথে যোগদান করুন।
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
