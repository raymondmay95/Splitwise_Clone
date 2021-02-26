import React from "react";
import "./introduction.css";

function Introduction(isLoaded) {
  const bios = [
    "Hello and Welcome to My Fair",
    "...designed to make your life easier",
    "...designed to make your life faster",
    "...designed to make your life more enjoyable",
    "...designed to make your life your responsibility",
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
    </>
  );
}

export default Introduction;
