import React, { useState } from "react";
import * as classes from "./editProfile.module.css";
import updateBalanceThunk from "../../store/session";
function EditBalance({ user, setBalance }) {
  // const [newEmail, setNewEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let curBal = Number(e.target.newBalance.value);
    updateBalanceThunk(curBal, user);
    let newState = user.current;
    let { accountBalance } = newState;
    let newBalance = accountBalance + curBal;
    newState.accountBalance = newBalance;
    user.current = newState;
    e.target.newBalance.value = 0;
    setBalance(newBalance);
  }

  return (
    <fieldset className={classes.outerContainer}>
      <legend>Add to account balance</legend>
      <form
        action="/"
        method="POST"
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <fieldset>
          <legend style={{ textAlign: "right" }}>Payment Type</legend>
          <select>
            <option></option>
            <option name="Visa" value="Visa">
              Visa
            </option>
            <option name="Master" value="Master">
              Master Card
            </option>
            <option name="AMEX" value="AMEX">
              American Express
            </option>
          </select>
        </fieldset>
        <fieldset>
          <legend style={{ textAlign: "right" }}>Amount</legend>
          <input
            className={classes.inputAmount}
            type="Number"
            name="newBalance"
          ></input>
        </fieldset>
        <div className={classes.submitContainer}>
          <input className={classes.submit} type="Submit"></input>
        </div>
      </form>
    </fieldset>
  );
}

export default EditBalance;
