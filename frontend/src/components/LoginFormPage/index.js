import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as classes from "./LoginForm.module.css";

function LoginFormPage({ setLogin }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to={`/user/${sessionUser.id}`} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className={classes.outer_form_container}>
      <div className={classes.login_flex_container}>
        <h2>Please Sign In</h2>
        <ul className={classes.errors}>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <fieldset className={classes.login}>
          <legend>Name or Email</legend>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className={classes.password}>
          <legend>Password</legend>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>
        <div className={classes.button}>
          <button type="submit">Log In</button>
          <button
            type="button"
            onClick={(e) => {
              setCredential("demo@user.io");
              setPassword("password");
            }}
          >
            Demo
          </button>
          <button
            type="button"
            className={classes.signUp}
            onClick={() => {
              setLogin(false);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginFormPage;
