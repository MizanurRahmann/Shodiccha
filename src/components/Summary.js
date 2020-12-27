import React from "react";
import "../styles/Policies.scss";
import help from "../assets/images/help-1.jpeg";

function Summary() {
    return (
        <div className="summary">
            {/* back */}
            <div
                className="summary__back"
                style={{ background: `url(${help})` }}
            >
                <div className="summary__back__layer"></div>
            </div>

            {/* front */}
            <div className="summary__details">
                <div className="summary__details-block">
                    <div className="head">মোট উদ্যোগ</div>
                    <div className="value">২০</div>
                </div>
                <div className="summary__details-block">
                    <div className="head">মোট অর্থসাহায্য</div>
                    <div className="value">
                        ৭০,০০০<span>৳</span>
                    </div>
                </div>
                <div className="summary__details-block">
                    <div className="head">মোট ভলেনটিয়ার</div>
                    <div className="value">৬০</div>
                </div>
                <div className="summary__details-block">
                    <div className="head">মোট দাতা</div>
                    <div className="value">৯০</div>
                </div>
            </div>

            {/* box */}
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
            <h1 className="primary-heading">সংক্ষিপ্তসার</h1>
        </div>
    );
}

export default Summary;
