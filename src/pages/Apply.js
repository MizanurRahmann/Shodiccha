import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Apply.scss";
import volunteer from "../assets/images/volunteer.svg";

// Components
import NavForViewer from "../components/NavForViewer";
import ApplyDescription from "../components/ApplyDescription";
import ApplyForm from "../components/ApplyForm";

function Apply() {
    const [state, setState] = useState(0);
    const [userType, setUserType] = useState("donour");

    useEffect(() => {
        setState(0);
    }, []);

    return (
        <div className="apply">
            <NavForViewer />
            <div className="apply__content">
                <h1>সদস্যের আবেদন</h1>

                {/* 1st Page */}
                {state === 0 ? (
                    <ApplyDescription
                        chnageTo={setUserType}
                        userType={userType}
                    />
                ) : null}

                {/* 2nd Page */}
                {state === 1 ? <ApplyForm /> : null}

                {/* button group */}
                <div className="button-group">
                    <button
                        type="button"
                        className={state === 0 ? "inactive" : "previous"}
                        onClick={state > 0 ? () => setState(state - 1) : null}
                    >
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
                {/* login link */}
                <div className="loginLink">
                    পূর্বেই সদস্য হয়েছেন? এখানে{" "}
                    <Link to="/enter">প্রবেশ করুন</Link>
                </div>
            </div>

            <div className="apply__line"></div>
            <div className="apply__image-block">
                <img src={volunteer} alt="" />
            </div>
        </div>
    );
}

export default Apply;
