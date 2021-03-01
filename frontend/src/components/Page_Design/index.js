import React from "react";
import "./Page_Design.css";
const iphone_light =
  "https://raw.githubusercontent.com/raymondmay95/Splitwise_Clone/master/frontend/src/images/iphone_light.png";
const iphone_dark =
  "https://raw.githubusercontent.com/raymondmay95/Splitwise_Clone/master/frontend/src/images/iphone_dark.png";
export default function PAGE_DESIGN() {
  return (
    <div className="img_container">
      <ul className="img-flex_container">
        <li className="img-color_container1">
          <img src={iphone_light} alt="phone" className="intro-img1"></img>
        </li>
        <li className="img-color_container2">
          <img src={iphone_dark} alt="phone" className="intro-img2"></img>
        </li>
        <li className="img-color_container3">
          <img src={iphone_dark} alt="phone" className="intro-img2"></img>
        </li>
        <li className="img-color_container4">
          <img src={iphone_light} alt="phone" className="intro-img1"></img>
        </li>
      </ul>
    </div>
  );
}
