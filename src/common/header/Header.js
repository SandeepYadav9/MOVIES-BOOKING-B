import React,{useState} from "react";
import Modal from "react-modal/lib/components/Modal";
import Login from "../../screens/login/Login";
import Register from "../../screens/login/Register";
import "./Header.css";
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegis, setIsRegis] = useState(false);
  const onLoginHandler = () => {
    setIsLogin(!isLogin);
  };
  const onRegisterHandler = () => {
    setIsRegis(!isRegis);
  };
  return (
    <div>
      <div className="header">
        <img
          src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg"
          alt="Movies-logo"
          className="image"
        />
      </div>
      <div className="upcomming-Movies">
        <span>Upcoming Movies</span>
      </div>
      <div>
      <Modal
          className="modal"
          isOpen={isLogin}
          overlayClassName="modalOverlay"
        >
          <Login />
        </Modal>
      </div>
      <div>
        <button className="custom-btn add-btn" onClick={onLoginHandler}>Login</button>
        <button className="custom-btn add-btn" onClick={onRegisterHandler}>SignUp</button>

        <Modal
          className="modal"
          isOpen={isRegis}
          overlayClassName="modalOverlay"
        >
          <Register />
        </Modal>
      </div>
    </div>
  );
};

export default Header;
