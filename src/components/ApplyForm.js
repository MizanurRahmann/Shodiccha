import React from "react";
import { Link } from "react-router-dom";
import "../styles/ApplyForm.scss";

function ApplyForm() {
    return (
        <div className="applyForm">
            <p>
                আপনার যাবতীয় তথ্য সঠিক কিনা তা নিশ্চিত হয়ে অতঃপর সাবমিট করুন।
                যেকোনপ প্রকার তথ্য বা প্রশ্নের জন্য{" "}
                <Link to="/query">এখানে</Link> ক্লিক করুন করুন।
            </p>
            <form>
                <div className="input-block">
                    <input type="text" placeholder="আপনার পূর্ন নাম" />
                    <input type="text" placeholder="অর্থের পরিমান" />
                </div>
                <div className="input-block">
                    <input type="email" placeholder="ইমেইল" />
                    <input type="text" placeholder="ফোন নাম্বার" />
                </div>
                <input type="text" placeholder="পূর্ন ঠিকানা" />
                <div className="input-block">
                    <input type="password" placeholder="পাসওয়ার্ড" />
                    <input type="password" placeholder="পুনরায় পাসওয়ার্ড" />
                </div>
            </form>
        </div>
    );
}

export default ApplyForm;
