import React, { useState } from "react";
import "../styles/Question.scss";
import NavForViewer from "../components/NavForViewer";

function Qestion() {
    const [email, setEmail] = useState("");
    const [msgType, setmsgtype] = useState("");
    const [msg, setMsg] = useState("");

    const questionLogicFunc = (event) => {
        event.preventDefault();
        console.log(`${email} - ${msgType} - ${msg}`);
    };

    return (
        <div className="question">
            <NavForViewer />
            <h1>প্রশ্ন করুন</h1>
            <p>
                আমাদের সংগঠন সম্পর্কিত আপনার যে কোনো প্রশ্ন থাকলে অথবা আমাদের
                সংগঠনের উন্নতির জন্য কোনো পরামর্শ থাকলে আমাদেরকে মেসেজের মাধ্যমে
                জানাতে পারে। আপনার প্রশ্নের উত্তর বা পরবর্তিতে আপনার সাথে
                যোগাযোগের জন্য আপনার মেসেজের সাথে আপনার ইমেইলটি সংযুক্ত করে দিন।
            </p>
            <form>
                <input
                    type="email"
                    placeholder="ইমেইল"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="selectOptions">
                    <select
                        value={msgType}
                        onChange={(e) => setmsgtype(e.target.value)}
                    >
                        <option value="advice">পরামর্শ</option>
                        <option value="question">প্রশ্ন</option>
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
                <textarea
                    rows="6"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                ></textarea>
                <button onClick={questionLogicFunc}>সাবমিট</button>
            </form>
        </div>
    );
}

export default Qestion;
