import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import Login from "../../screens/login/Login";
import Register from "../../screens/login/Register";
import "./Header.css";
import "../../UI/Button.css";
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsReister] = useState(false);

  const onLoginHandler = () => {
    setIsLogin(!isLogin);
  };
  const onRegisterHandler = () => {
    setIsReister(!isRegister);
  };

  const onClosedHandler = () => {
    setIsLogin(!isLogin);
  };
  const onClosedHandlerRegiste = () => {
    setIsReister(!isRegister);
  };

  return (
    <div>
      <div className="header">
        <img
          src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg"
          alt="Movies-logo"
          className="image"
        />
        <div>
          <button className="custom-btn add-btn" onClick={onLoginHandler}>
            Login
          </button>
          <button
            className="custom-btn-reg add-btn"
            onClick={onRegisterHandler}
          >
            Register
          </button>
        </div>
      </div>
      <div>
        <div>
          <Modal
            className="modal"
            isOpen={isLogin}
            overlayClassName="modalOverlay"
          >
            <div>
              <Login />
            </div>
            <span className="register">
              <button className="custom-btn add-btn " onClick={onClosedHandler}>
                Closed
              </button>
            </span>
          </Modal>
        </div>
        <div>
          <Modal
            className="modal"
            isOpen={isRegister}
            overlayClassName="modalOverlay"
          >
            <div>
              <Register />
            </div>
            <span className="register">
              <button
                className="custom-btn add-btn"
                onClick={onClosedHandlerRegiste}
              >
                Closed
              </button>
            </span>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
