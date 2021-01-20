import React from "react";
import "../styles/Members.scss";

// Assets
import flower from "../assets/images/flower-3.svg";
import member1 from "../assets/images/member-2.png";
import member2 from "../assets/images/member-3.png";
import member3 from "../assets/images/member-4.png";
import member4 from "../assets/images/member-1.png";
import member5 from "../assets/images/member-5.png";
import member6 from "../assets/images/member-6.png";
import member7 from "../assets/images/member-7.png";
import member8 from "../assets/images/member-8.png";

// Components
import MemberCard from "./MemberCard";
import MembersCardCircle from "./MembersCardCircle";

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

      {/* ---------- Team Members --------- */}
      {/* <div className="members" style={{ width: "60%", margin: "auto" }}>
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
      </div> */}

      {/* --------- Volenteers ---------- */}
      <div
        className="members"
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "60px",
        }}
      >
        <MembersCardCircle name={"মোঃ মেহেদি হাসান"} image={member1} />
        <MembersCardCircle name={"তফাজ্জল করিম"} image={member2} />
        <MembersCardCircle name={"জয়নাল শেখ"} image={member3} />
        <MembersCardCircle name={"শরিফা কবির"} image={member4} />
        <MembersCardCircle name={"জয়নাল শেখ"} image={member5} />
        <MembersCardCircle name={"নাছরিন আক্তার"} image={member6} />
        <MembersCardCircle name={"মোঃ কামাল হোসেন"} image={member7} />
        <MembersCardCircle name={"মোঃ আবু নাসের নাঈম"} image={member8} />
      </div>
    </div>
  );
}

export default ApplyForVolunteer;
