import { useState } from "react";
import { useSelector } from "react-redux";
import DASHBOARDSIDEBAR_LEFT from "../DashboardSidebar";
import INVOICE_COMPONENT from "../invoices";
import "./account.css";

function ACCOUNT_PAGE() {
  const sessionUser = useSelector((state) => state.session.user);
  let { accountBalance, email, fullName } = sessionUser;
  const [name, setName] = useState(fullName);
  const [reup, setReup] = useState(accountBalance);
  const [userEmail, setUserEmail] = useState(email);
  const [updateAmount, setUpdateAmount] = useState(0);
  const [updateName, setUpdateName] = useState(fullName);
  const [updateEmail, setUpdateEmail] = useState(email);
  const updateAccount = (e) => {
    return setUpdateAmount(e.target.value);
  };
  const changeEmail = async (e) => {
    return setUpdateEmail(e.target.value);
  };
  const changeName = (e) => {
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

  function InnerForm() {
    return (
      <form onSubmit={formSubmitHandler}>
        <div className="inner-form_container">
          <ul>
            <label>
              Update Name
              <input type="text" value={updateName} onChange={changeName} />
            </label>
            <label>
              Update Email
              <input type="email" value={updateEmail} onChange={changeEmail} />
            </label>
            <label>
              Update Account Balance
              <input
                type="number"
                onChange={updateAccount}
                value={updateAmount}
              />
            </label>
            <button type="submit" onClick={formSubmitHandler}>
              Update Profile
            </button>
          </ul>
        </div>
      </form>
    );
  }
  return (
    <div id="center_container">
      <div className="center_bars">
        {/* <div className="account-header">
          <h1 className="title">Your account</h1>
        </div> */}
        <div className="left_sidebar">
          <DASHBOARDSIDEBAR_LEFT sessionUser={sessionUser} />
        </div>
        <div className="center-column">
          <div className="user">
            <h3 id="name">Welcome back {name}</h3>
            <h2 id="email">{userEmail}</h2>
            <h2 id="balance">{`$ ${reup} remaining in your account`}</h2>
          </div>
          <div className="center-container">
            <INVOICE_COMPONENT setReup={setReup} />
          </div>
        </div>
        <div className="right_sidebar">
          <InnerForm />
        </div>
      </div>
    </div>
  );
}

export default ACCOUNT_PAGE;
