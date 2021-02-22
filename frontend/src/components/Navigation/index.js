import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
      <header>
        <img src="https://github.com/raymondmay95/Splitwise_Clone/blob/dev/frontend/src/images/wallet.png"></img>
        <ul>
          <li>
            <NavLink exact to="/" className="Nav_btn-home">
              Home
            </NavLink>
          </li>
        </ul>
        {isLoaded && sessionLinks}
      </header>
    </>
  );
}

export default Navigation;
