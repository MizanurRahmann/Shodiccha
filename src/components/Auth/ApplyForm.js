import React, { useState } from "react";
import { Link } from "react-router-dom";

// STYLES
import "../../styles/Form.scss";

function ApplyForm(props) {
  const [showPassword1, SetShowPassword1] = useState(false);
  const [showPassword2, SetShowPassword2] = useState(false);
  const [name, setName] = useState(null);
  const [occupation, setOccupation] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  // Apply function logic
  const apply = () => {
    if (requiredFildsValidation() && passwordValidation()) {
      setLoading(true);
      setTimeout(() => {
        // Apply logic --->
        console.log("All Ok");

        setErrors("");
        setLoading(false);
      }, 2000);
    } else {
      console.log("Failed");
    }
  };

  // field requirements validation
  const requiredFildsValidation = () => {
    if (
      name &&
      occupation &&
      mail &&
      phone &&
      address &&
      password &&
      confirmPassword
    ) {
      return true;
    } else {
      setErrors("আপনাকে সবগুলো ফিল্ড পূরন করতে হবে।");
      return false;
    }
  };

  // password validation
  const passwordValidation = () => {
    if (password.length < 6) {
      setErrors("পাসওয়ার্ড এর দৈর্ঘ্য ৬ বা তার বেশি হতে হবে।");
      return false;
    }
    if (password !== confirmPassword) {
      setErrors("দুইটা পাসওয়ার্ডই একই হতে হবে।");
      return false;
    }
    return true;
  };

  return (
    <div className="form-block">
      <p>
        আপনার যাবতীয় তথ্য সঠিক কিনা তা নিশ্চিত হয়ে অতঃপর সাবমিট করুন। যেকোনপ
        প্রকার তথ্য বা প্রশ্নের জন্য <Link to="/query">এখানে</Link> ক্লিক করুন
        করুন।
      </p>
      <form>
        <div className="input-block">
          <input
            type="text"
            placeholder="পূর্ন নাম"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="পেশা"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>

        {/* CONTACTS (MAIL AND PHONE) */}
        <div className="input-block">
          <input
            type="email"
            placeholder="ইমেইল"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="text"
            placeholder="ফোন নাম্বার"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* ADDRESS */}
        <input
          type="text"
          placeholder="পূর্ন ঠিকানা"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {/* PASSWORD */}
        <div className="input-block">
          <div className="password-block">
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="পাসওয়ার্ড"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
            />
            {showPassword1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-eye on"
                onClick={() => SetShowPassword1(false)}
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-eye-off off"
                onClick={() => SetShowPassword1(true)}
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            )}
          </div>
          <div className="password-block">
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="পুনরায় পাসওয়ার্ড"
              value={confirmPassword}
              onChange={(e) => SetConfirmPassword(e.target.value)}
            />
            {showPassword2 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-eye on"
                onClick={() => SetShowPassword2(false)}
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-eye-off off"
                onClick={() => SetShowPassword2(true)}
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            )}
          </div>
        </div>
        <small style={{ color: "red", marginTop: "25px" }}>{errors}</small>
        <div className="button-group" style={{ marginTop: "20px" }}>
          <button
            type="button"
            className="previous"
            onClick={() => props.setState(props.state - 1)}
          >
            পূর্ববর্তি
          </button>
          <button
            type="button"
            className={loading ? "inactive" : "next"}
            onClick={loading ? null : () => apply()}
          >
            {loading ? "...প্রসেসিং" : "সাবমিট"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplyForm;
