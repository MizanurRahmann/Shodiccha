import React, { useState } from "react";
import { fdb } from "../firebase/util";

// Styles
import "../styles/Help.scss";
import "../styles/Form.scss";

// Images
import wallet from "../assets/images/wallet.svg";

// Components
import Navbar from "../components/Navbar/Navbar";
import FormPageStyle from "../components/Auth/FormPageStyle";
import NotificationPop from "../components/NotificationPop";
import TrackHelpingProgress from "../components/TrackProgress/TrackHelpingProgress";

function Help() {
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [village, setVillage] = useState("");
  const [post, setPost] = useState("");
  const [thana, setThana] = useState("");
  const [district, setDistrict] = useState("");
  const [medium, setMedium] = useState("self");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationActive, setNotificationActive] = useState(false);
  const [loading, setLoading] = useState(false);

  // Clear all fileds
  const clearFields = () => {
    setTopic("");
    setName("");
    setPhone("");
    setVillage("");
    setPost("");
    setThana("");
    setDistrict("");
    setMedium("");
    setDescription("");
  };

  // All fields required validation check
  const requiredFildCheck = () => {
    if (
      name &&
      phone &&
      village &&
      post &&
      thana &&
      district &&
      medium &&
      description
    ) {
      return true;
    } else {
      setError("All fields required.");
      return false;
    }
  };

  // Phone number validation check
  const phoneNumberCheck = () => {
    if (phone.length === 11 && phone[0] === "0" && phone[1] === "1") {
      return true;
    } else {
      setError("Phone number is unvalid.");
      return false;
    }
  };

  // Description validation check
  const descriptionCheck = () => {
    if (description.length >= 5) {
      return true;
    } else {
      setError(
        "You have to describe your problems in more than 200 characters."
      );
      return false;
    }
  };

  // Help functionality
  const help = (e) => {
    e.preventDefault();
    setNotificationActive(true);
    setLoading(true);

    if (requiredFildCheck() && phoneNumberCheck() && descriptionCheck()) {
      fdb
        .collection("Helps")
        .add({
          topic,
          name,
          phone,
          medium,
          village,
          post,
          thana,
          district,
          description,
        })
        .then(() => {
          clearFields();
          setLoading(false);
          setNotificationActive(true);
          setNotification("Your request is submitted");
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="help">
        <Navbar />
        <div className="help__content">
          {/* Heading */}
          <h1 className="primary__heading">সাহায্যের জন্য আবেদন করুন</h1>

          {/* If form is submitted notification will be true and show other texts */}
          {!notificationActive ? (
            <p className="primary__heading-text">
              সাহায্যের আবেদনের জন্য অবশ্যই আপনার সঠিক তথ্যাদি ও আপনার সাহায্য
              চাওয়ার বিস্তারিত কারন লিখুন। আমাদের টিম যতোদ্রুত সম্ভব আপনার তথ্য
              যাচাই করে এ সম্পর্কে আপনাকে ফিডব্যাক দেবে।
            </p>
          ) : (
            // <p className="primary__heading-text">
            //   আপনার অনুরোধটি নেয়া হয়েছে। অনুরোধটির তথ্য যাচাই এর জন্য
            //   কিছুদিন সময়ের প্রয়োজন। তথ্য যাচাই শেষে আপনার করা অনুরোধ সম্পর্কীত
            //   আপডেট আপনাকে জানানো হবে। যেকোন মূহূর্তে আপনার অনুরোধের প্রগ্রেস
            //   জানতে করতে নিচের আইডিটি সংগ্রহ করুন (কোথাও লিখে রাখুন)।
            // </p>
            null
          )}

          {/* If form is submitted notification will be true and show texts otherwise show the sumbission form */}
          {!notificationActive ? (
            <div className="form-block">
              <form onSubmit={help}>
                <input
                  type="text"
                  placeholder="সাহায্যের বিষয়"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <div className="input-block">
                  <input
                    type="text"
                    placeholder="আবেদনকারির নাম"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="ফোন নাম্বার"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="selectOptions">
                  <select
                    value={medium}
                    onChange={(e) => setMedium(e.target.value)}
                  >
                    <option value="self">মাধ্যমঃ নিজে</option>
                    <option value="member">মাধ্যমঃ সদস্য</option>
                  </select>
                  <div className="arrow">
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
                      class="feather feather-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                <div className="input-block">
                  <input
                    type="text"
                    placeholder="গ্রাম"
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="পোষ্ট"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <input
                    type="text"
                    placeholder="থানা"
                    value={thana}
                    onChange={(e) => setThana(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="জেলা"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                </div>
                <textarea
                  rows="10"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <small
                  style={{ color: "red", margin: "10px 0", fontSize: "15px" }}
                >
                  {error}
                </small>

                {!loading ? (
                  <button>সাবমিট</button>
                ) : (
                  <button>প্রসেসিং...</button>
                )}
              </form>
            </div>
          ) : (
            <TrackHelpingProgress />
          )}
        </div>

        {/* Form page styling showed in right side */}
        <FormPageStyle image={wallet} component="apply" />
      </div>

      {notificationActive ? (
        <NotificationPop message={notification} type={"success"} />
      ) : null}
    </>
  );
}

export default Help;
