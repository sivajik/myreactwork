import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // if no dependency array -> useEffect caleld on each render
  // if dependency array is [] -> useEffect called on 'initial' render
  // if dependency array is [btnName] -> useEffect called each time btnName is changed.
  useEffect(() => {}, [btnName]);

  const btnClicked = () => {
    btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Status {onlineStatus ? "🤑" : "🥵"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
