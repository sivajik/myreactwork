import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const btnClicked = () => {
    if (btnName == "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={btnClicked}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
