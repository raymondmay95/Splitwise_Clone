import React from "react";
import "./Page_Design.css";
export default function Page_Design() {
  return (
    <div className="img_container">
      <ul className="img-flex_container">
        <li className="img-color_container1">
          <img
            src="https://secure.splitwise.com/assets/home_page/fixtures/asset1.png?raw=true"
            alt="img1"
            className="intro-img"
          ></img>
        </li>
        <li className="img-color_container2">
          <img
            src="https://secure.splitwise.com/assets/home_page/fixtures/asset2.png?raw=true"
            alt="img2"
            className="intro-img"
          ></img>
        </li>
        <li className="img-color_container3">
          <img
            src="https://secure.splitwise.com/assets/home_page/fixtures/asset2.png?raw=true"
            alt="img2"
            className="intro-img"
          ></img>
        </li>
        <li className="img-color_container4">
          <img
            src="https://secure.splitwise.com/assets/home_page/fixtures/asset2.png?raw=true"
            alt="img2"
            className="intro-img"
          ></img>
        </li>
      </ul>
    </div>
  );
}
