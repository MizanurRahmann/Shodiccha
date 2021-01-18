import React from "react";

// Components
import Banner from "../components/Banner";
import Description from "../components/Description";
import Summary from "../components/Summary";
import PastActivities from "../components/PastActivities";
import NavForViewer from "../components/NavForViewer";
import ApplyForVolunteer from "../components/ApplyForVolunteer";

function About() {
  return (
    <div style={{ padding: "100px 0" }}>
      <NavForViewer />
      <Banner />
      <Description />
      <Summary />
      <PastActivities />
      <ApplyForVolunteer />
    </div>
  );
}

export default About;
