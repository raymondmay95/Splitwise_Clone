import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { csrfFetch } from "../../store/csrf";
import * as sessionActions from "../../store/session";
import DashboardSidebar from "../DashboardSidebar";
import "./account.css";

function Account_Page() {
  const sessionUser = useSelector((state) => state.session.user);
  let { accountBalance, email, fullName, id, photo } = sessionUser;
  const [name, setName] = useState(fullName);
  const [reup, setReup] = useState(accountBalance);
  const [userEmail, setUserEmail] = useState(email);
  const [errors, setErrors] = useState([]);

  const handleSubmit = () => {};
  const handleNameSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="outer-contatiner_account">
      <h1 className="account-header">Your account</h1>
      <ul className="edit-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleNameSubmit} className="outer-form_account">
        <label className="name_account">
          <h2>Welcome Back...</h2>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">edit</button>
      </form>
      <form onSubmit={handleSubmit} className="outer-form_account">
        <label className="email_account">
          <h2>Welcome Back...</h2>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <button type="submit">edit</button>
      </form>
      <form onSubmit={handleSubmit} className="outer-form_account">
        <label className="balance_account">
          <h1>Your Balance:</h1>
          <h2>{accountBalance}</h2>
          <h3>Add more:</h3>
          <input
            type="accountBalance"
            value={reup}
            onChange={(e) => {
              let value = Number.parseInt(e.target.value);
              if (value) {
                setReup(value);
              } else {
              }
            }}
          />
        </label>
        <button type="submit">edit</button>
      </form>
      <DashboardSidebar />
    </div>
  );
}

export default Account_Page;
