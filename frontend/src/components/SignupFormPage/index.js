import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
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

  return (
    <>
      <div className="Signup-errors_container">
        <ul className="Signup-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
      {/* <img
        src="https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif"
        id="welcome-gif"
        alt="welcome-gif"
      ></img> */}
      <form onSubmit={handleSubmit} className="Nav-bar_signup">
        <label className="email">
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="fullName">
          Full Name
          <input
            type="text"
            value={fullName}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="password">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className="password">
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <label className="user-photo_input">
          Photo Url
          <input
            type="url"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormPage;
