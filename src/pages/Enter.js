import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Enter.scss";
import login from "../assets/images/login.svg";
import NavForViewer from "../components/NavForViewer";

function Enter() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const LoginLogic = (event) => {
        event.preventDefault();
        console.log(`${email} ${password} ${error}`);
        setEmail("");
        setPassword("");
    };

    return (
        <div className="enter">
            <NavForViewer />
            <div className="enter__content">
                <h1>প্রবেশ করুন</h1>
                <p>
                    লগ ইন করতে আপনি আপনার ব্যবহত ইমেইল ও পাসওয়ার্ডটা দিন। লগইন
                    করার মাধ্যমে আপনি আপনার একাউন্টের ও সদিচ্ছার চলমান একটিভিটি
                    সম্পর্কে জানতে পারবেন।
                </p>
                <form>
                    <input
                        type="email"
                        placeholder="ইমেইল"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="পাসওয়ার্ড"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={LoginLogic}>
                        প্রবেশ
                    </button>
                </form>
                {/* login link */}
                <div className="loginLink">
                    আপনি ফাউন্ডেশনের সদস্য নন?{" "}
                    <Link to="/enter">সদস্য হোন</Link>
                </div>
            </div>
            <div className="enter__line"></div>
            <div className="enter__image-block">
                <img src={login} alt="" />
            </div>
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
                class="feather feather-square square"
            >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
        </div>
    );
}

export default Enter;
