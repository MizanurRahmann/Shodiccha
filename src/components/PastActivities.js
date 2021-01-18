import React from "react";
import Slider from "react-slick";
import "../styles/PastActivity.scss";
import ActivityCard from "./ActivityCard";

function PastActivities() {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="pastact">
      <p>আমাদের</p>
      <h1>সফল উদ্যোগসমূহ</h1>

      <div className="pastact__slider-block">
        <Slider {...settings} className="slider">
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
