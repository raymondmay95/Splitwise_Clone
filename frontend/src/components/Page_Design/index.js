import React from "react";
import "./Page_Design.css";
export default function PAGE_DESIGN() {
  return (
    <div className="img_container">
      <ul className="img-flex_container">
        <li className="img-color_container1">
          <img
            src="https://github.com/raymondmay95/Splitwise_Clone/blob/dev/frontend/src/images/iphone_light.png?raw=true"
            alt="img1"
            className="intro-img"
          ></img>
        </li>
        <li className="img-color_container2">
          <img
            src="https://github.com/raymondmay95/Splitwise_Clone/blob/master/frontend/src/images/iphone_dark.png?raw=true"
            alt="img2"
            className="intro-img"
          ></img>
        </li>
        <li className="img-color_container3">
          <img
            src="https://github.com/raymondmay95/Splitwise_Clone/blob/master/frontend/src/images/iphone_dark.png?raw=true"
            alt="img2"
            className="intro-img"
          ></img>
        </li>
        <li className="img-color_container4">
          <img
            src="https://github.com/raymondmay95/Splitwise_Clone/blob/dev/frontend/src/images/iphone_light.png?raw=true"
            alt="img1"
            className="intro-img"
          ></img>
        </li>
      </ul>
    </div>
  );
}
