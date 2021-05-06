import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import * as classes from "./SignupForm.module.css";

function SignupFormPage({ setLogin }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [fullName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, fullName, password, photo })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  if (errors.length) alert(errors);

  return (
    <div className={classes.FormContainer}>
      <form onSubmit={handleSubmit} className={classes.signup}>
        <fieldset className={classes.fieldset_signup}>
          <legend className={classes.email}>Email 📨</legend>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className={classes.fieldset_signup}>
          <legend className={classes.name}>Full Name 📛</legend>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className={classes.fieldset_signup}>
          <legend className={classes.password}>Password 🔑</legend>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className={classes.fieldset_signup}>
          <legend className={classes.password}>Confirm Password ✔</legend>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className={classes.fieldset_signup}>
          <legend className={classes.photoInput}>Photo Url 📸</legend>
          <input
            type="url"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
        </fieldset>
        <div className={classes.button}>
          <button
            className={classes.toLogin}
            type="button"
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </button>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignupFormPage;
