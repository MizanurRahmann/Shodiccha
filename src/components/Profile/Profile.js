import React, { useEffect } from "react";
import { fdb } from "../../firebase/util";
import { connect } from "react-redux";
import {
  setUserProfile,
  clearUser,
  setLoading,
  clearLoading,
} from "../../redux/user/userAction";

// SCSS
import "../../styles/Profile.scss";
//ASSETS
import ChartBar from "./ChartBar";
import Overview from "./Overview";

function Profile(props) {
  useEffect(() => {
    if (props.userProfile === null) {
      fdb
        .collection("Users")
        .doc(props.currentUser.uid)
        .get()
        .then((doc) => {
          props.setUserProfile(doc.data());
        })
        .catch((err) => {
          console.log(err.message());
        });
    }
  }, []);

  return (
    <div className="profile">
      <div className="profile__basic">
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
      </div>

      <div className="profile__overview">
        <Overview />
      </div>

      <div className="profile__info">
        <ChartBar />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    userProfile: state.user.currentUserProfile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (user) => dispatch(setUserProfile(user)),
    clearUser: () => {
      dispatch(clearUser());
    },
    setLoading: () => dispatch(setLoading()),
    clearLoading: () => dispatch(clearLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
