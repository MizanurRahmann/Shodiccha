import React from "react";

function MembersCardCircle({ image, name }) {
  return (
    <div className="member-card-circle">
      <img src={image} alt="" />
      <h3>স্বেচ্ছাসেবক</h3>
      <h2>{name}</h2>
    </div>
  );
}

export default MembersCardCircle;
