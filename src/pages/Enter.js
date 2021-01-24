import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/util";
import { useHistory } from "react-router-dom";

// Styles
import "../styles/Enter.scss";
import "../styles/Form.scss";
// Assets
import login from "../assets/images/login.svg";
// Components
import Navbar from "../components/Navbar/Navbar";
import FormPageStyle from "../components/Auth/FormPageStyle";

function Enter() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // FORM VALIDATION
  const checkForm = () => {
    if (email && password) {
      return true;
    } else {
      setError("All fields required.");
      return false;
    }
  };

  // ENTER FUNCTIONality
  const enter = () => {
    if (checkForm()) {
      setLoading(true);
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setLoading(false);
          setEmail("");
          setPassword("");
          history.push("/");
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
        });
    }
  };

  return (
    <div className="enter">
      <Navbar />
      <div className="enter__content">
        {/* HEADING */}
        <h1 className="primary__heading">প্রবেশ করুন</h1>
        <p className="primary__heading-text">
          লগ ইন করতে আপনি আপনার ব্যবহত ইমেইল ও পাসওয়ার্ডটা দিন। লগইন করার
          মাধ্যমে আপনি আপনার একাউন্টের ও সদিচ্ছার চলমান একটিভিটি সম্পর্কে জানতে
          পারবেন।
        </p>

        {/* ENTER FORM */}
        <div className="form-block">
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
            <small style={{ color: "red", marginTop: "25px" }}>{error}</small>
            <button
              type="button"
              className={loading ? "inactive" : "next"}
              onClick={loading ? null : () => enter()}
            >
              {loading ? "...প্রসেসিং" : "সাবমিট"}
            </button>
          </form>
        </div>

        {/* APPLY LINK */}
        <div className="loginLink">
          আপনি ফাউন্ডেশনের সদস্য নন? <Link to="/enter">সদস্য হোন</Link>
        </div>
      </div>

      {/* FORM PAGE STYLES */}
      <FormPageStyle image={login} component="enter" />
    </div>
  );
}

export default Enter;
