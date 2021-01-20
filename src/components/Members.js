import React from "react";
import "../styles/Members.scss";

// Assets
import flower from "../assets/images/flower-3.svg";
import member1 from "../assets/images/member-2.png";
import member2 from "../assets/images/member-3.png";
import member3 from "../assets/images/member-4.png";

// Components
import MemberCard from "./MemberCard";

function ApplyForVolunteer() {
  return (
    <div className="members-block">
      <div className="flat__heading">
        <p>সদস্যবৃন্দ</p>
        <h1>
          আমাদের সম্মানিত সদস্যবৃন্দ <span></span>
        </h1>
      </div>

      <div className="flowers">
        <div className="flower-left">
          <img src={flower} alt="" />
        </div>
        <div className="flower-right">
          <img src={flower} alt="" />
        </div>
      </div>

      <div className="members" style={{ width: "60%", margin: "auto" }}>
        <MemberCard
          image={member1}
          name="বারিক সাদিক"
          desegnition="Secretary"
        />

        <MemberCard
          image={member2}
          name="মিজানুর রহমান"
          desegnition="Director"
        />

        <MemberCard
          image={member3}
          name="সাব্বির হাসান রেজা"
          desegnition="Editor"
        />
      </div>
    </div>
  );
}

export default ApplyForVolunteer;
