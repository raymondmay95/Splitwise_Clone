import { useState } from "react";

function UpdateEmail(e) {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Update Email</legend>
          <input
            type="email"
            value={email}
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input type="submit" value="Submit"></input>
        </fieldset>
      </form>
    </div>
  );
}

export default UpdateEmail;
