import React, { useState } from "react";
import * as classes from "./introduction.module.css";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";

function Introduction() {
  const [login, setLogin] = useState(true);
  return (
    <div className={classes.body}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.intro_legend}>Welcome</legend>
        <div className={classes.outer_box}>
          <div className={classes.inner_box}>
            <div className={classes.form_box}>
              {login ? (
                <LoginFormPage setLogin={setLogin} />
              ) : (
                <SignupFormPage setLogin={setLogin} />
              )}
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default Introduction;
