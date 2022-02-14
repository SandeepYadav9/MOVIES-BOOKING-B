import React, { useState } from "react";
import "./Register.css";
function Register(props) {
  const [copyEmail, setCopyEmail] = useState({
    fullName: "Full Name*",
    lastName: "Last Name*",
    email: "Email*",
    password: "password",
    contact: "Contact No*",
  });

  const onChangeInput = (e) => {
    let copyOfLoginState = { ...copyEmail };
    copyOfLoginState[e.target.name] = e.target.value;
    setCopyEmail(copyOfLoginState);
  };
  //   const clickHandler = () => {
  //     setClosed(!closed);
  //   };
  return (
    <div>
      <div className="containerReg">
        <div>
          <form action="" className="form">
            <input
              type="text"
              name="FullName"
              onChange={onChangeInput}
              value={copyEmail.fullName}
              className="input-control"
            />
            <br />
            <br />
            <input
              name="lastName*"
              type="text"
              onChange={onChangeInput}
              value={copyEmail.lastName}
              className="input-control"
            />
            <br />
            <br />
            <input
              name="Email"
              type="email"
              onChange={onChangeInput}
              value={copyEmail.email}
              className="input-control"
            />{" "}
            <br /> <br />
            <input
              name="Password"
              type="password"
              onChange={onChangeInput}
              value={copyEmail.password}
              className="input-control"
            />{" "}
            <br /> <br />
            <input
              name="Contact"
              type="text"
              onChange={onChangeInput}
              value={copyEmail.contact}
              className="input-control"
            />{" "}
            <br /> <br />
            <span className="component-body-container-reg ">
              <button className="custom-btn-reg reg-btn">Register</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
