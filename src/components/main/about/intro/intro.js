import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <p>
        Hello, My name is John Doe. Lorem ipsum dolor sit amet, usu sumo dicant
        vulputate in. Quando fabellas adipiscing nam an. An vis congue oporteat,
        no eros facer suavitate eos. An debet affert aliquid ius. Veritus
        placerat est ea, est ne nominavi suscipit maluisset.
      </p>

      <ul className="info">
        <li>
          <strong>Birthday:</strong> March 13,1994
        </li>
        <li>
          <strong>Location:</strong> Kocaeli, TURKEY
        </li>
        <li>
          <strong>Email:</strong> yusuftekmil.yt@outlook.com.tr <br />    yusuftekmil.yt@gmail.com
        </li>
        <li>
          <strong>Phone:</strong> +90 546 197 76 38
        </li>
      </ul>
    </div>
  );
};

export default Intro;
