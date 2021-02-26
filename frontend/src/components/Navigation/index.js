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
      <NavLink to="/user" className={"Nav_btn-wallet"}>
        <div className="logo">__wallet</div>
      </NavLink>
    );
  } else {
    logoLinks = (
      <>
        <div className="home">
          <NavLink exact to="/" className={"Nav_btn-home"}>
            <h1>Home</h1>
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <>
      <header>
        {logoLinks}
        {isLoaded && sessionLinks}
      </header>
    </>
  );
}

export default Navigation;
