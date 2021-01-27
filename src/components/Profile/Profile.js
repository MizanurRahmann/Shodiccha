import React, { useEffect } from "react";
import { auth } from "../../firebase/util";
import { connect } from "react-redux";
import { setUser, clearUser } from "../../redux/user/userAction";

// SCSS
import "../../styles/Profile.scss";
//ASSETS
import member1 from "../../assets/images/member-1.png";
import ChartBar from "./ChartBar";
import Overview from "./Overview";

function Profile({ userProfile, currentUser }) {
  useEffect(() => {}, []);

  return (
    <div className="profile">
      <div className="profile__basic">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={currentUser.photoURL} alt="" className="profile-picture" />
          <div className="name">
            <h2>স্বেচ্ছাসেবক</h2>
            {/* <h1>{currentUser.displayName}</h1> */}
            <h1>মোঃ মিজানুর রহমান</h1>
            <button>Edit Profile</button>
          </div>
        </div>
        <div className="details">
          <div className="detail">
            <h3>Email:</h3>
            <p>mr926560@gmail.com</p>
          </div>
          <div className="detail">
            <h3>Phone:</h3>
            <p>+880 1531709712</p>
          </div>
          <div className="detail">
            <h3>Occupation:</h3>
            <p>Student</p>
          </div>
          <div className="detail">
            <h3>Gender:</h3>
            <p>Male</p>
          </div>
          <div className="detail">
            <h3>Address:</h3>
            <p>Khandar, Bogra</p>
          </div>
          <div className="detail">
            <h3>Joined:</h3>
            <p>12 JAN 2020</p>
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
    setUser: (user) => dispatch(setUser(user)),
    clearUser: () => {
      dispatch(clearUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
