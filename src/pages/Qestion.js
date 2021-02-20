import React, { useState } from "react";
import { fdb } from "../firebase/util";
import question from "../assets/images/question.svg";

// Styles
import "../styles/Question.scss";
import "../styles/Form.scss";

// Components
import Navbar from "../components/Navbar/Navbar";
import FormPageStyle from "../components/Auth/FormPageStyle";
import NotificationPop from "../components/NotificationPop";

function Qestion() {
  const [email, setEmail] = useState("");
  const [msgType, setmsgtype] = useState("advice");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationActive, setNotificationActive] = useState(false);
  const [loading, setLoading] = useState(false);

  // Clear all fields
  const clearFields = () => {
    setEmail("");
    setmsgtype("");
    setMsg("");
  };

  // Notification Handler
  const notificatioHandler = (type) => {
    setNotificationActive(true);
    setNotification(`Your ${type} is submitted`);
  };

  const questionLogicFunc = (event) => {
    event.preventDefault();
    
    if (email && msg) {
      setLoading(true);
      fdb
        .collection("Questions")
        .add({ email: email, type: msgType, message: msg })
        .then(() => {
          clearFields();
          notificatioHandler(msgType);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
        });
    } else{
      setError("All fields required.");
    }
  };

  return (
    <>
      <div className="question">
        <Navbar />

        {/* HEADING */}
        <h1 className="primary__heading">মন্তব্য করুন</h1>
        <p className="primary__heading-text">
          আমাদের সংগঠন সম্পর্কিত আপনার যে কোনো প্রশ্ন অথবা সংগঠনের উন্নতির জন্য
          কোনো পরামর্শ থাকলে আমাদেরকে জানান।
        </p>

        {/* QUESTION FORM */}
        <div className="form-block">
          <form>
            <input
              type="email"
              placeholder="ইমেইল"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="selectOptions">
              <select
                value={msgType}
                onChange={(e) => setmsgtype(e.target.value)}
              >
                <option value="advice">পরামর্শ</option>
                <option value="question">প্রশ্ন</option>
              </select>
              <div className="arrow">
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
                  className="feather feather-chevron-down"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            <textarea
              rows="6"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <small style={{ color: "red", margin: "10px 0", fontSize: "15px" }}>
              {error}
            </small>
            {
              !loading 
              ? <button onClick={questionLogicFunc}>সাবমিট</button>
              : <button>প্রসেসিং...</button>
            }
          </form>
        </div>

        {/* Form page styling showed in right side */}
        <FormPageStyle image={question} />
      </div>

      {
        notificationActive 
        ? <NotificationPop message={notification} type={"success"} />
        : null
      }
    </>
  );
}

export default Qestion;
