import React, { useState } from "react";
import "./Login.css";
function Login(props) {
  const [copyEmail, setCopyEmail] = useState({
    email: "Email",
    password: "Password",
  });

  const onChangeInput = (e) => {
    let copyOfLoginState = { ...copyEmail };
    copyOfLoginState[e.target.name] = e.target.value;
    setCopyEmail(copyOfLoginState);
  };
  return (
    <div>
      <h4 className="login">Login</h4>

      <div className="container">
        <div>
          <form action="" className="form">
            <input
              type="text"
              name="email"
              onChange={onChangeInput}
              value={copyEmail.email}
              className="input-control"
            />
            <br />
            <br />
            <input
              name="password"
              type="password"
              onChange={onChangeInput}
              value={copyEmail.password}
              className="input-control"
            />
            <br />
            <br />
            <span className="component-body-container ">
              <button className="custom-btn add-btn">Login</button>
            </span>
            <p>Don't have an account Yet Register</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;