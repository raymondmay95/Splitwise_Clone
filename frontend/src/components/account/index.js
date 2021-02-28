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
    <div className="outer-contatiner_account">
      <h1 className="account-header">Your account</h1>
      <DashboardSidebar />
      <h2>{name}</h2>
      <h2>{userEmail}</h2>
      <h2>{reup}</h2>
      return (
      <form onSubmit={formSubmitHandler}>
        <div>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <ul>
            <li>
              <label>
                Update Name
                <input type="text" value={updateName} onChange={changeName} />
              </label>
            </li>
            <li>
              <label>
                Update Email
                <input
                  type="email"
                  value={updateEmail}
                  onChange={changeEmail}
                />
              </label>
            </li>
            <li>
              <label>
                Update Account Balance
                <input type="number" onChange={updateAccount} />
              </label>
            </li>
            <li>
              <button type="submit">Update Profile</button>
            </li>
          </ul>
        </div>
      </form>
      <ul>
        {errors.map((error) => (
          <li>{error.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Account_Page;
