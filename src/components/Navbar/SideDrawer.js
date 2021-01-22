import React from "react";
import { Link } from "react-router-dom";

const SideDrawer = (props) => {
  let drawerClass = "side__drawer";
  if (props.show) {
    drawerClass = "side__drawer open";
  }

  return (
    <nav className={drawerClass}>
      <Link className="navbar-brand big-navbar-brand" to="/">
        be <span>Bookaholic</span>
      </Link>
      <ul>
        <li>
          <Link to="/" onClick={props.clear}>
            হোম
          </Link>
        </li>
        <li>
          <Link to="/apply" onClick={props.clear}>
            সদস্য হোন
          </Link>
        </li>
        <li>
          <Link to="/enter" onClick={props.clear}>
            প্রবেশ করুন
          </Link>
        </li>
        <li>
          <Link to="/help" onClick={props.clear}>
            আবেদন করুন
          </Link>
        </li>
        <li>
          <Link to="/query" onClick={props.clear}>
            প্রশ্ন করুন
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
