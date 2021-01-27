import React from "react";

function BasicInformation(props) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={props.currentUser.photoURL}
          alt=""
          className="profile-picture"
        />
        <div className="name">
          <h2>স্বেচ্ছাসেবক</h2>
          <h1>{props.currentUser.displayName}</h1>
          <button>Edit Profile</button>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <h3>ইমেইলঃ</h3>
          <p>{props.currentUser.email}</p>
        </div>
        <div className="detail">
          <h3>ফোনঃ</h3>
          <p>{props.userProfile && props.userProfile.phone}</p>
        </div>
        <div className="detail">
          <h3>পেশাঃ</h3>
          <p>{props.userProfile && props.userProfile.occupation}</p>
        </div>
        <div className="detail">
          <h3>লিঙগঃ</h3>
          <p>
            {props.userProfile && props.userProfile.gender
              ? props.userProfile.gender
              : "N/A"}
          </p>
        </div>
        <div className="detail">
          <h3>ঠিকানাঃ</h3>
          <p>{props.userProfile && props.userProfile.address}</p>
        </div>
        <div className="detail">
          <h3>যোগদানঃ</h3>
          <p>{props.userProfile && props.userProfile.joined}</p>
        </div>
      </div>
    </>
  );
}

export default BasicInformation;
