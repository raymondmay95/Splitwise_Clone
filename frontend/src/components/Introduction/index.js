import React from "react";
import "./introduction.css";

function Introduction(isLoaded) {
  const bios = [
    ["...designed to make your life easier"],
    ["...designed to make your life faster"],
    ["...designed to make your life more enjoyable"],
    ["...designed to make your life your responsibility"],
  ];

  return (
    <>
      <section className="bio_container">
        <div className="bio-flex_container">
          <div class="bio">
            <h1>Hello and Welcome to My Fair</h1>
            {bios.map((bio, i) => (
              <h3 className={`bio_${i}`}>{bio}</h3>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduction;
