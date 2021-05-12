import React from "react";
import * as classes from "./account.module.css";

function ACCOUNT_PAGE({ user }) {
  return (
    <div className={classes.account_body}>
      <h1>
        Welcome Back{" "}
        <span className={classes.name}>{user.current.fullName}</span>
      </h1>
      <fieldset className={classes.fieldset}>
        <legend>{new Date().toString()}</legend>
        <p>
          Your total balance is <span>${user.current.accountBalance} USD</span>
          <br></br>
        </p>
      </fieldset>
    </div>
  );
}

export default ACCOUNT_PAGE;
