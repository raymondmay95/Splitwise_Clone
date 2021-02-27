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

  const handleSubmit = () => {};
  const handleNameSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="outer-contatiner_account">
      <h1 className="account-header">Your account</h1>
      <DashboardSidebar />
      <h2>{name}</h2>
      <h2>{userEmail}</h2>
      <h2>{reup}</h2>
      <ul>
        {errors.map((error) => (
          <li>{error.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Account_Page;
