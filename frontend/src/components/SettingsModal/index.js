import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { Modal } from "../../context/Modal";
import * as classes from "../Navigation/Navigation.module.css";

function SettingModal() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const logout = (e) => {
    e.preventDefault();
    console.log("clicked");
    dispatch(sessionActions.logout());
    window.location.pathname = "/";
  };

  return (
    <>
      <div onClick={() => setShowModal(true)} className={classes.navlinks}>
        ⚙
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </Modal>
      )}
    </>
  );
}

export default SettingModal;
