import React from "react";
import * as classes from "./introduction.module.css";
import LoginFormPage from "../LoginFormPage";

function Introduction() {
  return (
    <div className={classes.body}>
      <fieldset className={classes.fieldset}>
        <legend>Welcome</legend>
        <div className={classes.outer_box}>
          <div className={classes.inner_box}>
            <div className={classes.form_box}>
              <LoginFormPage />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default Introduction;
