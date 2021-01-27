import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar/Navbar";
import ApplyDescription from "../components/Auth/ApplyDescription";
import ApplyForm from "../components/Auth/ApplyForm";
import FormPageStyle from "../components/Auth/FormPageStyle";
// SCSS
import "../styles/Apply.scss";
// Assets
import volunteer from "../assets/images/volunteer.svg";

function Apply() {
  const [state, setState] = useState(0);
  const [userType, setUserType] = useState("donour");

  return (
    <div className="apply">
      <Navbar />

      <div className="apply__content">
        <h1 className="primary__heading">সদস্যের আবেদন</h1>

        {/* 1st PAGE */}
        {state === 0 ? (
          <ApplyDescription chnageTo={setUserType} userType={userType} />
        ) : null}

        {/* 2nd PAGE */}
        {state === 1 ? <ApplyForm state={state} setState={setState} /> : null}

        {/* BUTTON GROUPS */}
        {state === 0 ? (
          <div className="button-group">
            <button type="button" className="inactive">
              পূর্ববর্তি
            </button>
            <button
              type="button"
              className="next"
              onClick={() => setState(state + 1)}
            >
              পরবর্তি
            </button>
          </div>
        ) : null}

        {/* ENTER LINK */}
        <div className="loginLink">
          পূর্বেই সদস্য হয়েছেন? এখানে <Link to="/enter">প্রবেশ করুন</Link>
        </div>
      </div>

      {/* FORM PAGE STYLES */}
      <FormPageStyle image={volunteer} component="apply" />
    </div>
  );
}

export default Apply;
