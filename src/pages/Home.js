import React from "react";

// Components
import Banner from "../components/Banner";
import Description from "../components/Description";
import Summary from "../components/Summary";
import PastActivities from "../components/Activities/PastActivities";
// import NavForViewer from "../components/Navbar/NavForViewer";
import Members from "../components/Members";
import RecentActivity from "../components/Activities/RecentActivity";
import Navbar from "../components/Navbar/Navbar";

function About() {
  return (
    <div style={{ padding: "100px 0" }}>
      <Navbar />
      <Banner />
      <Description />
      <Summary />
      <RecentActivity />
      <Members />
      <PastActivities />
    </div>
  );
}

export default About;
