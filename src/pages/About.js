import React from "react";
import "../styles/About.scss";

// Components
import Banner from "../components/Banner";
import Description from "../components/Description";
import Summary from "../components/Summary";

function About() {
    return (
        <div className="about">
            <Banner />
            <Description />
            <Summary />
        </div>
    );
}

export default About;
