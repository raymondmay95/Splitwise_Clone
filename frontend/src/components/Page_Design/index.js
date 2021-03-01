import React from "react";
import "./Page_Design.css";
const iphone_light =
  "https://github.com/raymondmay95/Splitwise_Clone/blob/b404f1cd0477fb620a76a84a7826f692105535f0/frontend/src/images/iphone_light.png?raw=true";
const iphone_dark =
  "https://github.com/raymondmay95/Splitwise_Clone/blob/5826179b4acc27d41fcda02f2e0286729a0f061f/frontend/src/images/iphone_dark.png?raw=true";
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
