import React from "react";
import * as classes from "./editProfile.module.css";
function EditProfile({ user }) {
  return (
    <form className={classes.form}>
      <label>Add to Wallet</label>
      <fieldset>
        <legend>Payment Type</legend>
        <select>
          <option></option>
          <option value="Visa">Visa</option>
          <option value="Master">Master Card</option>
          <option value="AMX">American Express</option>
        </select>
      </fieldset>
      <fieldset>
        <legend>Amount</legend>
        <input
          type="number"
          name="balanceUpdate"
          min="0.00"
          onChange={console.log}
          placeholder="0.00"
          className={classes.inputAmount}
        ></input>
      </fieldset>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
}

export default EditProfile;
