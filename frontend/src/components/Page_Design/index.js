import React from "react";
import "./Page_Design.css";
import iphone_light from "../../images/iphone_light.png";
import iphone_dark from "../../images/iphone_dark.png";
export default function PAGE_DESIGN() {
  return (
    <div className="img_container">
      <ul className="img-flex_container">
        <li className="img-color_container1">
          <img src={iphone_light} alt="img1" className="intro-img"></img>
        </li>
        <li className="img-color_container2">
          <img src={iphone_dark} alt="img2" className="intro-img"></img>
        </li>
        <li className="img-color_container3">
          <img src={iphone_dark} alt="img2" className="intro-img"></img>
        </li>
        <li className="img-color_container4">
          <img src={iphone_light} alt="img1" className="intro-img"></img>
        </li>
      </ul>
    </div>
  );
}
