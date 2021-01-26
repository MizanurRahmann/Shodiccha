import React from "react";

//Assets
import member1 from "../../assets/images/member-1.png";
import member2 from "../../assets/images/member-7.png";
import member3 from "../../assets/images/member-8.png";

function TopMembers() {
  return (
    <div className="topDonour">
      <h1 style={{ fontSize: "25px", color: "var(--text-color)" }}>
        শীর্ষ সদস্যবৃন্দ
      </h1>
      <h2 style={{ fontSize: "16px", color: "gray", fontWeight: "normal" }}>
        ডোনেশন ও বিভিন্ন ইভেন্টে অংশগ্রহনের ভিত্তিতে আমাদের সম্মানিত ৩
        সদস্যবৃন্দ
      </h2>
      <div className="members">
        <div className="heading">
          <div className="name">নাম</div>
          <div className="donation">দান</div>
          <div className="participation">অংশগ্রহন</div>
        </div>

        <div className="member">
          <div className="name">
            <img src={member1} alt="" style={{ background: "#D4EFDB" }} />
            <h2>আব্দুর রাকিব</h2>
          </div>
          <div className="donation" style={{ color: "#79d980" }}>
            25000
          </div>
          <div className="participation">12</div>
        </div>

        <div className="member">
          <div className="name">
            <img src={member2} alt="" style={{ background: "#FDD3E6" }} />
            <h2>মিজানুর রহমান</h2>
          </div>
          <div className="donation" style={{ color: "#F27294" }}>
            10000
          </div>
          <div className="participation">10</div>
        </div>

        <div className="member">
          <div className="name">
            <img src={member3} alt="" style={{ background: "#E7F2FA" }} />
            <h2>আহম্মেদ আব্দুল বারিক</h2>
          </div>
          <div className="donation" style={{ color: "#8BBDE8" }}>
            9500
          </div>
          <div className="participation">15</div>
        </div>
      </div>
    </div>
  );
}

export default TopMembers;
