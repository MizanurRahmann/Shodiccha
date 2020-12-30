import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
            <NavLink to="/apply">সদস্য হোন</NavLink>
            <Link to="/enter">প্রবেশ করুন</Link>
            <Link to="/application">আবেদন করুন</Link>
            <Link to="/query">প্রশ্ন করুন</Link>
        </div>
    );
}

export default NavForViewer;
