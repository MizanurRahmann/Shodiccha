import React, { useRef } from "react";
import Slider from "react-slick";
import "../../styles/PastActivity.scss";
import ActivityCard from "../Cards/ActivityCard";

function PastActivities() {
  const customSlider = useRef();

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="pastact">
      <p>আমাদের</p>
      <h1>সফল উদ্যোগসমূহ</h1>

      <div className="button_box">
        <div
          className="round_btn"
          onClick={() => customSlider.current.slickPrev()}
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
          </svg>
        </div>
        <div
          className="round_btn"
          onClick={() => customSlider.current.slickNext()}
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
      </div>

      <div className="pastact__slider-block">
        <Slider
          ref={(slider) => (customSlider.current = slider)}
          {...settings}
          className="slider"
        >
          <ActivityCard value={1} />
          <ActivityCard value={2} />
          <ActivityCard value={3} />
          <ActivityCard value={4} />
          <ActivityCard value={5} />
          <ActivityCard value={6} />
          <ActivityCard value={7} />
          <ActivityCard value={8} />
        </Slider>
      </div>
    </div>
  );
}

export default PastActivities;
