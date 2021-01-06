import React, { useState } from "react";
import "../styles/Help.scss";
import NavForViewer from "../components/NavForViewer";

function Help() {
    const [name, setName] = useState("");
    const [medium, setMedium] = useState("self");
    const [location, setLocation] = useState("");

    return (
        <div className="help">
            <NavForViewer />
            <div className="help__content">
                <h1 className="primary__heading">সাহায্যের জন্য আবেদন করুন</h1>
                <p className="primary__heading-text">
                    সাহায্যের আবেদনের জন্য অবশ্যই আপনার সঠিক তথ্যাদি ও আপনার
                    সাহায্য চাওয়ার বিস্তারিত কারন লিখুন। আমাদের টিম যতোদ্রুত
                    সম্ভব আপনার তথ্য যাচাই করে আপনাকে জানিয়ে দিবে আপনার
                    সাহায্যটি গ্রহন হয়েছে কি না? এবং আমরা আপনাকে কতোটুকু সাহায্য
                    করতে পারবো?
                </p>

                <form>
                    <input
                        type="text"
                        placeholder="আবেদনকারীর নাম"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <div className="selectOptions">
                        <select
                            value={medium}
                            onChange={(e) => setMedium(e.target.value)}
                        >
                            <option value="self">নিজে</option>
                            <option value="member">সদস্য</option>
                        </select>
                        <div className="arrow">
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
                                class="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Help;
