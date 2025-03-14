import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  console.log("hader render");
  // if no dependency array -> useEffect caleld on each render
  // if dependency array is [] -> useEffect called on 'initial' render
  // if dependency array is [btnName] -> useEffect called each time btnName is changed.
  useEffect(() => {
    console.log("useefect called....");
  }, [btnName]);

  const btnClicked = () => {
    btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
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
