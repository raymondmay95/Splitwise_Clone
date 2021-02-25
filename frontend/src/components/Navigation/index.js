import React from "react";
import { NavLink, Redirect } from "react-router-dom";
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

  return (
    <>
      <header>
        <div className="logo">
          <NavLink exact to="/" className={"Nav_btn-home"}>
            __home
          </NavLink>
        </div>
        {isLoaded && sessionLinks}
      </header>
    </>
  );
}

export default Navigation;
