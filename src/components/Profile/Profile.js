import React from "react";
import { connect } from "react-redux";

// Scss
import "../../styles/Profile.scss";

// Components
import EmailVarification from "./EmailVarification";
import BasicInformation from "./BasicInformation";
import Overview from "./Overview";
import ChartBar from "./ChartBar";

function Profile({ currentUser, userProfile }) {
  
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

export default connect(mapStateToProps)(Profile);
