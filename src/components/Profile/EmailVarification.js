import React, { useState } from "react";
import { auth } from "../../firebase/util";
import { connect } from "react-redux";
import { setUser } from "../../redux/user/userAction";

// Assets
import handshake from "../../assets/images/handshake.svg";
import celebrate from "../../assets/images/celebrate.svg";

function EmailVarification({ setUser }) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendVarificationLink = () => {
    setLoading(true);
    const user = auth.currentUser;
    user
      .sendEmailVerification()
      .then(() => {
        setSent(true);
        setUser(auth.currentUser);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong, Please try later");
        setLoading(false);
      });
  };

  return (
    <div className="emailVarification">
      {!sent ? (
        <>
          <div className="wrapper">
            <img src={handshake} alt="" />
          </div>
          <h1>স্বাগতম</h1>
          <h2>আপনার মেইলটি এখনও সত্যাখান হয়নি</h2>
          <small style={{ color: "red" }}>{error}</small>
          {!loading ? (
            <button className="sent" onClick={sendVarificationLink}>
              ইমেইল সত্যাখান করুন
            </button>
          ) : (
            <button className="processing">ইমেইল পাঠানো হচ্ছে...</button>
          )}
        </>
      ) : (
        <>
          <div className="wrapper">
            <img src={celebrate} alt="" />
          </div>
          <h1>মেইল চেক করুন</h1>
          <h2>আপনার মেইলে সত্যাখান লিংক পাঠানো হয়েছে</h2>
          <small style={{ color: "red" }}>{error}</small>
          {!loading ? (
            <button className="sent" onClick={sendVarificationLink}>
              পুনরায় লিংক পাঠান
            </button>
          ) : (
            <button className="processing">ইমেইল পাঠানো হচ্ছে...</button>
          )}
        </>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};
export default connect(mapDispatchToProps)(EmailVarification);
