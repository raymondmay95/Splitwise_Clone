import React, { useState } from "react";
import * as classes from "./wallet.module.css";
import EditBalance from "../EditBalance";
import UpdateEmail from "../UpdateEmail";

function Wallet({ user }) {
  const [balance, setBalance] = useState(Number(user.current.accountBalance));
  // console.log(user);
  let userPhotoStyle = {
    backgroundImage: `url(${user.current.photo})`,
    backgroundSize: "cover",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
  };
  return (
    user && (
      <div className={classes.Outer_Body}>
        <div className={classes.Body}>
          <div className={classes.Pull_Left}>
            <EditBalance user={user} setBalance={setBalance} />
            <div className={classes.Spacer}></div>
            <UpdateEmail user={user} />
          </div>
          <br />
          <div className={classes.Pull_Right}>
            <div style={userPhotoStyle}></div>
            <h2>Welcome Back {user.current.fullName}</h2>
            <div className={classes.User_Balance}>
              <p>
                You're current balance is
                <span> ${balance}</span>
              </p>
            </div>
            <div className={classes.User_Email}>
              <p>
                You're primary email is
                <span> {user.current.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Wallet;
