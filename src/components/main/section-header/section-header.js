import React from "react";
import "./section-header.css";

const SectionHeader = ({ title, isButtonVisible }) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {isButtonVisible && (
        <a
          href="../section-header/Yusuf_Tekmil_v1_Profile.pdf"
          className="resume-download"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Download"
        >
          <i className="fa fa-download" aria-hidden="true">
            {" "}
          </i>{" "}
          Download Resume
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
