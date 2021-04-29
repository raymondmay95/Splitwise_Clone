import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    window.location.pathname = "/";
  };

  return (
    <>
      <div onClick={openMenu}>
        <img src={user.photo} alt="profile" id="profile_btn"></img>
        {/* <i className="fas fa-user-circle" /> */}
        {/* {console.log(user)} */}
      </div>
      {showMenu && (
        <ul className="dropdown-menu pull-right">
          <div className="dropdown-flex_container">
            <NavLink to="/user">Your account </NavLink>
            <NavLink to="/create/group">Create a group </NavLink>
            <NavLink to="/calculator">Fairness calculators </NavLink>
            <NavLink to="/" onClick={logout}>
              Log out
            </NavLink>
          </div>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
