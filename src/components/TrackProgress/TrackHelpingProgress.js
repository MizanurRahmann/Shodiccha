import React from "react";
import { Link } from "react-router-dom";
import completed from "../../assets/images/Completed.svg";
import "../../styles/Progress.scss";

function TrackHelpingProgress({requestId}) {
  return (
    <div className="progress">
      <p>
        আপনার অনুরোধটি নেয়া হয়েছে। অনুরোধটির তথ্য যাচাই এর জন্য কিছুদিন সময়ের
        প্রয়োজন। তথ্য যাচাই শেষে আপনার করা অনুরোধ সম্পর্কীত আপডেট আপনাকে জানানো
        হবে। যেকোন মূহূর্তে আপনার অনুরোধের প্রগ্রেস জানতে করতে নিচের আইডিটি
        সংগ্রহ করুন (কোথাও লিখে রাখুন)।
      </p>

      <div className="progress__image">
        <img src={completed} alt="" />
      </div>

      <h1>&#8220; {requestId} &#8221;</h1>

      <div className="links">
          <Link to="/">হোম পেজে যান</Link>
      </div>
    </div>
  );
}

export default TrackHelpingProgress;
