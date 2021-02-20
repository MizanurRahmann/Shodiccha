import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/NavForViewer.scss";
import DrawerTogglerButton from "./DrawerTogglerButton";

function NavForViewer(props) {
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
      className={whiteBackground ? "navforviwer white-active" : "navforviwer"}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <DrawerTogglerButton click={props.drawerToggleClickHnadler} />

        {/* if logged in then just show brand otherwise navbar items*/}
        {!props.isLogedIn ? (
          <div className="nav-items">
            <NavLink to="/" exact={true}>
              হোম
            </NavLink>
            <NavLink to="/apply">সদস্য হোন</NavLink>
            <NavLink to="/enter">প্রবেশ করুন</NavLink>
            <NavLink to="/help">আবেদন করুন</NavLink>
            <NavLink to="/query">প্রশ্ন করুন</NavLink>
          </div>
        ) : (
          <div className="nav-items">
            <NavLink to="/" className="brand" exact={true}>
              স্বদিচ্ছা
            </NavLink>
          </div>
        )}
      </div>

      {/* Donation Button */}
      {!props.isLogedIn ? (
        <NavLink className={whiteBackground ? "donate" : "hide"} to="/donate">
          দান করুন
        </NavLink>
      ) : (
        <div className="userBox">
          <div className="notification">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <div className="dot"></div>
          </div>

          <div className="userPhoto">
            <img src={props.currentUser.photoURL} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavForViewer;
