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
          <li>
            <NavLink to="/">Your account</NavLink>
          </li>
          <li>
            <NavLink to="/">Create a group</NavLink>
          </li>
          <li>
            <NavLink to="/">Fairness calculators</NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={logout}>
              Log out
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
