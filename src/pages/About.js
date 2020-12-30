import React from "react";
import "../styles/About.scss";

// Components
import Banner from "../components/Banner";
import Description from "../components/Description";
import Summary from "../components/Summary";
import PastActivities from "../components/PastActivities";
import NavForViewer from "../components/NavForViewer";

function About() {
    return (
        <div className="about">
            <NavForViewer />
            <Banner />
            <Description />
            <Summary />
            <PastActivities />
        </div>
    );
}

export default About;
