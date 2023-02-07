import React from "react";
import {
  TfiFacebook,
  TfiTwitterAlt,
  TfiYoutube,
  TfiLinkedin,
  TfiGithub,
  TfiStackOverflow,
} from "react-icons/tfi";
import "./social-icons.css";


const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/yusuf-tekmil-developer">
            <TfiLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/Tekmily">
            <TfiGithub />
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/19129969/yusuf-tekmil">
            <TfiStackOverflow />
          </a>
        </li>
        <li>
          <a href="#">
            <TfiTwitterAlt/>
          </a>
        </li>
        <li>
          <a href="#">
            <TfiYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
