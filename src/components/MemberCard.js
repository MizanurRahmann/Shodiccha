import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import network from "../assets/images/network.svg";

function MemberCard({ image, name, desegnition }) {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const checkDesegnition = (desegnition) => {
    if (desegnition === "Director") {
      setBackgroundColor("#FDDBEB");
      setTextColor("#F27294");
    } else if (desegnition === "Secretary") {
      setBackgroundColor("#E7F2FA");
      setTextColor("#94CEF2");
    } else if (desegnition === "Editor") {
      setBackgroundColor("#D4EFDC");
      setTextColor("#76bf54");
    } else {
      setBackgroundColor("#FFF3D4");
      setTextColor("#F2A649");
    }
  };

  useEffect(() => {
    checkDesegnition(desegnition);
  }, []);

  return (
    <div className="member-card">
      <img src={network} style={{ margin: "0 50px -60px 0" }} alt="" />
      <img src={image} alt="" />

      <div className="info">
        <h2>{name}</h2>
        <div
          className="desegnition"
          style={{ background: backgroundColor, color: textColor }}
        >
          <div className="round" style={{ background: textColor }}></div>
          {desegnition}
        </div>

        <div className="social-links">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-activity"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
