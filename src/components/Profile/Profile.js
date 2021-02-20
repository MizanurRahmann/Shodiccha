import React, { useEffect } from "react";
import { fdb } from "../../firebase/util";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/user/userAction";

// Scss
import "../../styles/Profile.scss";
// Components
import EmailVarification from "./EmailVarification";
import BasicInformation from "./BasicInformation";
import Overview from "./Overview";
import ChartBar from "./ChartBar";

function Profile({ currentUser, userProfile, setUserProfile }) {
  // If user profile not set to redux store, then set user profile
  useEffect(() => {
    if (userProfile === null) {
      fdb
        .collection("Users")
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          setUserProfile(doc.data());
        })
        .catch((err) => {
          console.log(err.message());
        });
    }
  });

  // If User email varified then render profile otherwise load email-varification page
  if (!currentUser.emailVerified) {
    return <EmailVarification />;
  } else {
    return (
      <div className="profile">
        {/* basic info */}
        <div className="profile__basic">
          <BasicInformation
            currentUser={currentUser}
            userProfile={userProfile}
          />
        </div>
        {/* overview */}
        <div className="profile__overview">
          <Overview />
        </div>
        {/* bar chart */}
        <div className="profile__info">
          <ChartBar />
        </div>
      </div>
    );
  }
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
