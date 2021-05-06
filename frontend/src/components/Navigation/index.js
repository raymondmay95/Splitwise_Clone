import React from "react";
import { NavLink } from "react-router-dom";
// import ProfileButton from "./ProfileButton";
// import LoginFormModal from "../LoginFormModal";
import * as classes from "./Navigation.module.css";
import SettingsModal from "../SettingsModal";

function Navigation({ user }) {
  return (
    <nav>
      <NavLink to="/" className={classes.navlinks}>
        🏠
      </NavLink>
      <NavLink to="/wallet" className={classes.navlinks}>
        👜
      </NavLink>
      <NavLink to="/bills" className={classes.navlinks}>
        💵
      </NavLink>
      <NavLink to="/payment-history" className={classes.navlinks}>
        ✔
      </NavLink>
      <SettingsModal />
    </nav>
  );
}

export default Navigation;
