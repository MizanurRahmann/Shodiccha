import React from "react";
import "../../styles/ActivityCard.scss";

// ASSETS
import help from "../../assets/images/help-1.jpeg";
import hand from "../../assets/images/hand.svg";
import dollar from "../../assets/images/dollar.svg";

function ActivityCard(props) {
  return (
    <div className="acard">
      <div
        className="acard__image"
        style={{
          background: `url(${help}) no-repeat center center / cover`,
        }}
      ></div>
      <div className="acard__content">
        <h2>বন্যা দূর্গতদের জন্য অর্থায়ন</h2>
        <p>স্থানঃ ঠনঠনিয়া, বগুড়া সদর, বগুড়া</p>
        <p className="date">15 JAN 2020</p>

        <div className="acard__content__info">
          <div className="logo">
            <img src={dollar} alt="" width="16px" />
          </div>
          <div className="value">২০,০০০</div>
        </div>
        <div className="acard__content__info">
          <div className="logo">
            <img src={hand} alt="" width="16px" />
          </div>
          <div className="value">২০+</div>
        </div>

        {/* readmore button */}
        <div className="readmore">
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
            class="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
