import React from "react";
import "./AnimatedProfile.css";

const AnimatedProfile = () => {
  return (
    <div className="home__img">
      <img
        src={require("./ingrid.ramoloto.jpg")}
        className="img-fluid profile-image"
        alt="Profile"
      />
    </div>
  );
};

export default AnimatedProfile;
