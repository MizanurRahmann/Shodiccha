import React from "react";
import { Link } from "react-router-dom";
import "../styles/Description.scss";

// Assets
import education from "../assets/images/graduated.svg";
import globe from "../assets/images/global.svg";
import proverty from "../assets/images/money-bag.svg";
import healthcare from "../assets/images/health.svg";
import flower1 from "../assets/images/flower-3.svg";

function Description() {
  return (
    <>
      <div className="description">
        <div className="description__heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="180"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-square"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          </svg>
          <h1>প্রেরণা</h1>
        </div>
        <div className="description__text">
          <p>
            আমরা বিশ্বাস করি সুস্থ্য্ ও সুন্দরভাবে বেচে থাকার অধিকার প্রতিটি
            মানুষের। আমরা সবাই জানি, আমাদের চারপাশেই এমন অনেকেই আছেন যাদের কাছে
            বেচে থাকার জন্য প্রয়োজনীয় মৌলিক বিষয়গুলো অনেক দূর্লভ। তাদের কষ্ট আর
            দূঃক্ষ ভরাক্রান্ত জীবনে যদি আমরা সাহায্যের হাত বাড়িয়ে দেই তবে তারা
            হয়তো তাদের জীবনের এই দূঃক্ষ-দূর্দশা থেকে বের হতে পারবে সাথে সাথে
            একটি সুন্দর জীবন যাপন শুরু করতে পারবে। কিন্তু, বেশিরভাগ সময়ই আমাদের
            একক প্রচেষ্টায় এটি সম্ভবপর হয়ে ওঠেনা। এক্ষেত্রে এক দল স্বেচ্ছাসেবক
            যদি তাদের ব্যক্তিজীবনে দৈন্দিনের অপ্রয়োজনীয় অর্থগুলো অপচয় না করে তা
            জমা করে এসকল মানুষদের জন্য ব্যায় করে তবে সেটি অনেক বেশি ফল্প্রসু হয়।{" "}
            <span>'স্বদিচ্ছা'</span> হচ্ছে এমনই একটি অলাভজনক ও অরাজনৈতীক
            প্রতিষ্ঠান যেটি এমনই উদ্যম এক ঝাক স্বেচ্ছাসেবকদের নিয়ে হতদরিদ্র
            মানুষদের জন্য কাজ করে যেনো, প্রতিটি মানুষ দ্বিধাহীনভাবে বিচরন করতে
            পারে, হাসতে পারে এবং সোনালী স্বপ্ন দেখতে পারে।
          </p>

          <div className="button">
            <Link to="/about" className="btn primary__btn">
              অধিক জানুন...
            </Link>
          </div>
        </div>

        <div className="flower-left">
          <img src={flower1} alt="" />
        </div>
        <div className="flower-right">
          <img src={flower1} alt="" />
        </div>
      </div>

      <div className="workingon">
        <div className="workingon__heading">
          <p>সেবাসমূহ</p>
          <h1>
            যে বিষয়গুলোতে আমরা <span>অবদান</span> রাখি
          </h1>
        </div>

        <div className="service">
          <img src={education} alt="education" />
          <h2>শিক্ষা</h2>
        </div>
        <div className="service">
          <img src={healthcare} alt="education" />
          <h2>চিকিৎসা</h2>
        </div>
        <div className="service">
          <img src={proverty} alt="education" />
          <h2>দারিদ্রতা</h2>
        </div>
        <div className="service">
          <img src={globe} alt="education" />
          <h2>পরিবেশ</h2>
        </div>
      </div>
    </>
  );
}

export default Description;
