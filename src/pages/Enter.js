import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Enter.scss";
import login from "../assets/images/login.svg";

// Components
import NavForViewer from "../components/NavForViewer";
import FormPageStyle from "../components/FormPageStyle";

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
                {/* HEADING */}
                <h1 className="primary__heading">প্রবেশ করুন</h1>
                <p className="primary__heading-text">
                    লগ ইন করতে আপনি আপনার ব্যবহত ইমেইল ও পাসওয়ার্ডটা দিন। লগইন
                    করার মাধ্যমে আপনি আপনার একাউন্টের ও সদিচ্ছার চলমান একটিভিটি
                    সম্পর্কে জানতে পারবেন।
                </p>

                {/* ENTER FORM */}
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

                {/* APPLY LINK */}
                <div className="loginLink">
                    আপনি ফাউন্ডেশনের সদস্য নন?{" "}
                    <Link to="/enter">সদস্য হোন</Link>
                </div>
            </div>

            {/* FORM PAGE STYLES */}
            <FormPageStyle image={login} component="enter" />
        </div>
    );
}

export default Enter;
