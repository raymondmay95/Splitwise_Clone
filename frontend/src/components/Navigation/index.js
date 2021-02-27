import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
// import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        {/* <LoginFormModal /> */}
        <NavLink to="/login" className={"sessionLinks Login"}>
          Log In
        </NavLink>
        <NavLink to="/signup" className={"sessionLinks signup"}>
          Sign Up
        </NavLink>
      </>
    );
  }
  let logoLinks;
  if (sessionUser) {
    logoLinks = (
      <>
        <ul class="nav pull-right">
          <li>
            <NavLink to="/user" className="dropdown-toggle">
              <img
                id="logo"
                src="https://github.com/raymondmay95/Splitwise_Clone/blob/084fd2cc5cfaf1494e43230a8b31083b66e840b0/frontend/src/images/wallet-logo.png?raw=true"
                alt="logo"
              />
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
        </ul>
      </>
    );
  } else {
    logoLinks = (
      <>
        <ul class="nav pull-right">
          <li>
            <NavLink to="/" className="dropdown-toggle">
              <img
                id="logo"
                src="https://github.com/raymondmay95/Splitwise_Clone/blob/084fd2cc5cfaf1494e43230a8b31083b66e840b0/frontend/src/images/wallet-logo.png?raw=true"
                alt="logo"
              />
            </NavLink>
          </li>
        </ul>
      </>
    );
  }

  return (
    <>
      <div className="Header">
        <div className="flex_container">
          {logoLinks}
          {isLoaded && sessionLinks}
        </div>
      </div>
    </>
  );
}

export default Navigation;
