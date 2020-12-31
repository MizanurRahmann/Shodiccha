import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <div
            className={
                whiteBackground ? "navforviwer white-active" : "navforviwer"
            }
        >
            <NavLink to="/" exact={true}>
                হোম
            </NavLink>
            <NavLink to="/apply">সদস্য হোন</NavLink>
            <NavLink to="/enter">প্রবেশ করুন</NavLink>
            <NavLink to="/application">আবেদন করুন</NavLink>
            <NavLink to="/query">প্রশ্ন করুন</NavLink>
        </div>
    );
}

export default NavForViewer;
