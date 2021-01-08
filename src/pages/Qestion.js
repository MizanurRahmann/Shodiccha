import React, { useState } from "react";
import question from "../assets/images/question.svg";

// Styles
import "../styles/Question.scss";
import "../styles/Form.scss";

// Components
import NavForViewer from "../components/NavForViewer";
import FormPageStyle from "../components/FormPageStyle";

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

            {/* HEADING */}
            <h1 className="primary__heading">মন্তব্য করুন</h1>
            <p className="primary__heading-text">
                আমাদের সংগঠন সম্পর্কিত আপনার যে কোনো প্রশ্ন অথবা সংগঠনের উন্নতির
                জন্য কোনো পরামর্শ থাকলে আমাদেরকে জানান।
            </p>

            {/* QUESTION FORM */}
            <div className="form-block">
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

            {/* FORM PAGE STYLES */}
            <FormPageStyle image={question} />
        </div>
    );
}

export default Qestion;
