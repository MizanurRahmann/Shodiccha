import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, fdb } from "../../firebase/util";
import { useHistory } from "react-router-dom";
import md5 from "md5";

// STYLES
import "../../styles/Form.scss";

function ApplyForm(props) {
  const history = useHistory();
  const [showPassword1, SetShowPassword1] = useState(false);
  const [showPassword2, SetShowPassword2] = useState(false);
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  // FIELDS REQUIREMENTS VALIDATION
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
      setErrors("All fields required");
      return false;
    }
  };

  // PASSWORD VALIDATION
  const passwordValidation = () => {
    if (password.length < 6) {
      setErrors("Password length must be greater than 6 characters.");
      return false;
    }
    if (password !== confirmPassword) {
      setErrors("Passwords should be matched.");
      return false;
    }
    return true;
  };

  // PHONE-NUMBER VALIDATION
  const phoneNumberValidation = () => {
    if (phone.length === 11 && phone[0] === "0" && phone[1] === "1") {
      return true;
    }
    setErrors("Your Phone number is not valid. Try again with 01");
    return false;
  };

  // VALIDATION CHECK
  const validationCheck = () => {
    if (
      requiredFildsValidation() &&
      passwordValidation() &&
      phoneNumberValidation()
    ) {
      return true;
    }
    return false;
  };

  //SAVE USER TO DATABASE
  const saveUsersToDataBase = (createdUser) => {
    console.log("called");
    fdb
      .collection("Users")
      .doc(createdUser.user.uid)
      .set({
        name: createdUser.user.displayName,
        avatar: createdUser.user.photoURL,
        gender: "",
        joined: new Date().toISOString().slice(0, 10),
        donated: 0,
        participation: 0,
        phone,
        address,
        occupation,
      }).then(() => {
        // nothing
      }).catch(err => {
        setErrors(err.message);
      })
  };

  // CLEAR ALL FIELDS
  const clearFields = () => {
    setName("");
    setOccupation("");
    setMail("");
    setPhone("");
    setAddress("");
    SetPassword("");
    SetConfirmPassword("");
    setErrors("");
  };

  // APPLY FUNCTION LOGIC
  const apply = () => {
    if (validationCheck()) {
      setLoading(true);
      setErrors("");

      auth
        .createUserWithEmailAndPassword(mail, password)
        .then((res) => {
          return res.user.updateProfile({
              displayName: name,
              photoURL: `https://gravatar.com/avatar/${md5(res.user.email)}?d=identicon`,
          })
          .then(() => {
            setLoading(false);
            saveUsersToDataBase(res);
            clearFields();
            history.push("/");
          })
        })
        .catch((err) => {
          setErrors(err.message);
          setLoading(false);
        });
    }
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-eye on"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-eye-off off"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-eye on"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-eye-off off"
                onClick={() => SetShowPassword2(true)}
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            )}
          </div>
        </div>
        <small style={{ color: "red", marginTop: "15px" }}>{errors}</small>
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
            onClick={loading ? null : apply}
          >
            {loading ? "...প্রসেসিং" : "সাবমিট"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplyForm;
