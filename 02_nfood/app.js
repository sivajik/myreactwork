import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const styleCard = {
  backgroundColor: "lightgray"
}
const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src="https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,w_1097,h_480/f_auto/q_auto/dpr_1.0/d_uk:cuisines:chinese-8.jpg/v1/uk/restaurants/118058.jpg" alt="res-logo"/>
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 mins</h4>

    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search Bar
      </div>
      <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/> 
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>                        
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (<div className="app">
    <Header/>
    <Body/>
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
