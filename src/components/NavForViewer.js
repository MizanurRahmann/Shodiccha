import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavForViewer.scss";

function NavForViewer() {
    const [whiteBackground, setWhiteBackground] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 40) {
            setWhiteBackground(true);
        } else {
            setWhiteBackground(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <div className={whiteBackground ? "navforviwer active" : "navforviwer"}>
            <Link>সেচ্ছাসেবক হোন</Link>
            <Link>আবেদন করুন</Link>
            <Link>প্রশ্ন করুন</Link>
        </div>
    );
}

export default NavForViewer;
