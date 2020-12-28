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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
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
            <h1>বিগত সফল উদ্যোগসমূহ</h1>

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
