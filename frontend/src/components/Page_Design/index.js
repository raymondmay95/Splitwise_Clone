import React from "react";
import "./Page_Design.css";
import iphone_light from "../../images/iphone_light.png";
import iphone_dark from "../../images/iphone_dark.png";
export default function PAGE_DESIGN() {
  return (
    <div className="img_container">
      <ul className="img-flex_container">
        <li className="img-color_container1">
          <div className="intro-img1"></div>
        </li>
        <li className="img-color_container2">
          <div className="intro-img2"></div>
        </li>
        <li className="img-color_container3">
          <div className="intro-img2"></div>
        </li>
        <li className="img-color_container4">
          <div className="intro-img1"></div>
        </li>
      </ul>
    </div>
  );
}
