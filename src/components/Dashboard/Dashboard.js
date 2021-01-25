import React from "react";

// SCSS
import "../../styles/Dashboard.scss";
import Activity from "./Activity";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__activity">
        <div className="activity-overview">
          <Activity
            background="#FDD3E6"
            color="#F27294"
            value="১২"
            text="মোট উদ্যোগ"
            image="1"
          />
          <Activity
            background="#D4EFDB"
            color="#79D980"
            value="৫০"
            text="সক্রিয় সদস্য"
            image="2"
          />
          <Activity
            background="#E7F2FA"
            color="#8BBDE8"
            value="৬০,০০০"
            text="সর্বমোট অর্থসাহায্য"
            image="3"
          />
        </div>
      </div>

      <div className="dashboard__eventInfo">Ok</div>
    </div>
  );
}

export default Dashboard;
