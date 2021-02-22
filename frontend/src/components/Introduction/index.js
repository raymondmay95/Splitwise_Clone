import React, { useEffect, useState } from "react";
import "./introduction.css";

function Introduction() {
  const bios = [
    "Hello and Welcome to My Fair",
    "...designed to make your life easier",
    "...designed to make your life faster",
    "...designed to make your life more enjoyable with friends",
    "...designed for you and your life on the go!",
  ];

  const bio_elements = bios.map((bio, i) => {
    let bioArray = bio.split(" ");
    return (
      <div class="bio">
        {bioArray.map((ele) => (
          <span className={`bio_${i}`}>{ele}</span>
        ))}
      </div>
    );
  });

  return (
    <>
      <section className="bio-container">{bio_elements}</section>
      <img
        src="https://github.com/raymondmay95/Splitwise_Clone/blob/dev/frontend/src/images/bio_img_1.png"
        alt="brought to you by your trusted app, My Fair!"
      ></img>
    </>
  );
}

export default Introduction;
