import { useState } from "react";
import { useSelector } from "react-redux";
import DashboardSidebar from "../DashboardSidebar";
import "./account.css";

function Account_Page() {
  const sessionUser = useSelector((state) => state.session.user);
  let { accountBalance, email, fullName } = sessionUser;
  const [name, setName] = useState(fullName);
  const [reup, setReup] = useState(accountBalance);
  const [userEmail, setUserEmail] = useState(email);
  const [errors, setErrors] = useState([]);
  const [updateAmount, setUpdateAmount] = useState(0);
  const [updateName, setUpdateName] = useState(fullName);
  const [updateEmail, setUpdateEmail] = useState(email);
  const updateAccount = (e) => {
    e.preventDefault();
    return setUpdateAmount(e.target.value);
  };
  const changeEmail = async (e) => {
    e.preventDefault();
    return setUpdateEmail(e.target.value);
  };
  const changeName = (e) => {
    e.preventDefault();
    let newName = e.target.value;
    return setUpdateName(newName);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (updateAmount) {
      setReup((reup) => reup + Number(updateAmount));
      setUpdateAmount(0);
    }
    setName(updateName);
    setUserEmail(updateEmail);
    return { name, reup, userEmail };
  };
  return (
    <div id="account_container">
      <div className="inner-account_container">
        <div className="account-header">
          <h1 className="title">Your account</h1>
        </div>
        <DashboardSidebar sessionUser={sessionUser} />
        <div className="user">
          <h2 id="name">{name}</h2>
          <h2 id="email">{userEmail}</h2>
          <h2 id="balance">{`$ ${reup}`}</h2>
        </div>
        <form onSubmit={formSubmitHandler}>
          <div className="inner-form_container">
            <ul>
              <label>
                Update Name
                <input type="text" value={updateName} onChange={changeName} />
              </label>
              <label>
                Update Email
                <input
                  type="email"
                  value={updateEmail}
                  onChange={changeEmail}
                />
              </label>
              <label>
                Update Account Balance
                <input type="number" onChange={updateAccount} />
              </label>
              <button type="submit">Update Profile</button>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account_Page;
